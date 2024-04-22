import { productMapper, sendPostRequest, userMapper, validateLoginRequest } from "../helper";
import { SAMPLE_INVALID_CREDENTIALS, SAMPLE_INVALID_LOGIN_REQUEST_1, SAMPLE_LOGIN_REQUEST, SAMPLE_PRODUCTS, SAMPLE_PRODUCTS_FROM_API, SAMPLE_USER, SAMPLE_USER_FROM_API } from "./__mocks__/mockData";
import fetch from "node-fetch";

jest.mock('node-fetch', () => jest.fn());

describe('Helper', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        
    })
    afterEach(() => {
        jest.resetModules();
    })

    it('sendPostRequest success', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue(SAMPLE_USER_FROM_API),
            status: 200
        })
        const response = await sendPostRequest('testURl', SAMPLE_LOGIN_REQUEST);
        expect(response.status).toEqual(200);
        expect(response.data).toEqual(SAMPLE_USER_FROM_API);
    })

    it('sendPostRequest error', async () => {
        (fetch as jest.Mock).mockResolvedValue({
            json: jest.fn().mockResolvedValue(SAMPLE_INVALID_CREDENTIALS),
            status: 401
        })
        const response = await sendPostRequest('testURl', SAMPLE_INVALID_LOGIN_REQUEST_1);
        expect(response.status).toEqual(401);
        expect(response.data).toEqual(SAMPLE_INVALID_CREDENTIALS);
    })

    it('validateLoginRequest success', () => {
        const response = validateLoginRequest(SAMPLE_LOGIN_REQUEST);
        expect(response).toBeTruthy();
    })

    it('validateLoginRequest error', () => {
        const response = validateLoginRequest(SAMPLE_INVALID_LOGIN_REQUEST_1);
        expect(response).toBeFalsy();
    })

    it('usermapper', () => {
        const response = userMapper(SAMPLE_USER_FROM_API);
        expect(response).toEqual(SAMPLE_USER);
    })

    it('productmapper', () => {
        const response = productMapper(SAMPLE_PRODUCTS_FROM_API);
        expect(response).toEqual(SAMPLE_PRODUCTS);
    })
})