import fetch from "node-fetch"
import { Product, ProductResponse, User, UserLoginRequest, UserLoginValidResponse } from "./types";

export const sendPostRequest = async (url: string, body: Object) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    const data = await response.json();
    return { status: response.status, data };
}

export const validateLoginRequest = (request: UserLoginRequest): boolean => {
    if(!request.username || !request.password) {
        return false;
    }
    return true;
}

export const userMapper = (userObject: UserLoginValidResponse): User => {
    return {
        username: userObject.username,
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        avatar: userObject.image,
        token: userObject.token
    }
}

export const productMapper = (products: ProductResponse[]): Product[] => {
    const parsedProducts: Product[] = [];
    products.forEach(product => {
        parsedProducts.push({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        thumbnail: product.thumbnail
        })
    });
    parsedProducts.sort((productA, productB) => (productA.title.toLowerCase() < productB.title.toLowerCase() ? -1 : 1));
    return parsedProducts;
}