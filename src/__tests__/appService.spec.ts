import fetch from "node-fetch";
import { db } from "../app";
import { addProductToCart, getProducts, getUserId, initializeDb, login } from "../services/appService";
import { SAMPLE_CART, SAMPLE_INVALID_CREDENTIALS, SAMPLE_LOGIN_REQUEST, SAMPLE_PRODUCTS, SAMPLE_USER, SAMPLE_USER_FROM_API } from "./__mocks__/mockData";


jest.mock('node-fetch', () => jest.fn())


describe('App service', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        
    })
    afterEach(() => {
        jest.resetModules();
    })
    it('initialise db', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue({products: SAMPLE_PRODUCTS})
        })
        await initializeDb();
        expect(db.getProducts()).toEqual(SAMPLE_PRODUCTS);
    })

    it('get products', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue({products: SAMPLE_PRODUCTS})
        })
        const products = await getProducts();
        expect(products).toEqual(SAMPLE_PRODUCTS);
    })

    it('login success', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue(SAMPLE_USER_FROM_API),
            status: 200
        })
        const user = await login(SAMPLE_LOGIN_REQUEST);
        expect(user).toEqual(SAMPLE_USER);
    })

    it('get user id success', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue(SAMPLE_USER_FROM_API),
            status: 200
        })
        const id = await getUserId('validToken');
       
        expect(id).toEqual(SAMPLE_USER_FROM_API.id);
    })

    it('get user id error', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue(SAMPLE_INVALID_CREDENTIALS),
            status: 401
        })
        const id = await getUserId('inValidToken');
       
        expect(id).toEqual(0);
    })

    it('add to cart', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue({products: SAMPLE_PRODUCTS})
        })
        await initializeDb();
        await addProductToCart(1, 1);
        expect(db.getCart(1)).toEqual(SAMPLE_CART)

    })
})