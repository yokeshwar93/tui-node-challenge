import fetch from "node-fetch"
import { db } from "../app";
import { DUMMY_JSON_ENDPOINTS, ERROR_MESSAGES } from "../constants";
import { BadRequestException, InternalServerException, UnauthorizedException } from "../exceptions/Exceptions";
import { productMapper, sendPostRequest, userMapper } from "../helper";
import { GetProductsResponse, ProductResponse, User, UserLoginInvalidResponse, UserLoginRequest, UserLoginValidResponse } from "../types";

const initializeDb = async () => {
    try {
        const products = await getProducts();
        db.setProducts(products);
    } catch(error) {
        console.error(error);
        db.setProducts([])
    }
}
const getProducts = async () => {
    try {
        const response = await fetch(DUMMY_JSON_ENDPOINTS.GET_PRODUCTS);
        const data: GetProductsResponse = await response.json() as GetProductsResponse;
        const { products } = data;
        return productMapper(products as ProductResponse[]);
    } catch(error) {
        console.error(error)
        throw new InternalServerException();
    }
}

const login = async (request: UserLoginRequest) => {
    const { status, data } = await sendPostRequest(DUMMY_JSON_ENDPOINTS.LOGIN, request);
    
        if(status !== 200) {
            const response = data as UserLoginInvalidResponse;
            if(response.message === ERROR_MESSAGES.INVALID_LOGIN) {
                throw new UnauthorizedException();
            } else {
                throw new InternalServerException();
            }
        }
    return userMapper(data as UserLoginValidResponse);
}

const getUserId = async (token: string): Promise<number> => {
    try {
        const response = await fetch(DUMMY_JSON_ENDPOINTS.GET_USER, {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        });
        const data = await response.json() as UserLoginInvalidResponse;
        if(data.message) {
            return 0;
        }
        const { id } = data as unknown as UserLoginValidResponse;;
        return id;
    } catch(error) {
        return 0;
    }
}
    
    
const addProductToCart = async (productId: number, userId: number) => {
    const product = db.getProductById(productId);
    const userCart = db.getCart(userId);
    if(!product) {
        throw new BadRequestException(ERROR_MESSAGES.PRODUCT_NOT_FOUND);
    }
    let updatedTotal;
    if(userCart) {
        const { grandTotal, productList } = db.getCart(userId);
        if(productList.find(product => product.id === productId)) {
            throw new BadRequestException(ERROR_MESSAGES.DUPLICATE_PRODUCT);
        }
        updatedTotal = grandTotal + product.price;
    } else {
        updatedTotal = product.price
    }
    db.updateCart(userId, product, updatedTotal);
    return db.getCart(userId);
}   
export {
    getProducts,
    getUserId,
    initializeDb,
    login,
    addProductToCart,
}