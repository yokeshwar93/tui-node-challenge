import app, { db } from '../app';
import supertest from 'supertest';
import { SAMPLE_ADD_CART_REQUEST, SAMPLE_CART, SAMPLE_INVALID_LOGIN_REQUEST_1, SAMPLE_INVALID_LOGIN_REQUEST_2, SAMPLE_LOGIN_REQUEST, SAMPLE_PRODUCTS, SAMPLE_USER } from './__mocks__/mockData';
import { jest } from '@jest/globals';
import { addProductToCart, login } from '../services/appService';
import { ERROR_MESSAGES } from '../constants';
import { UnauthorizedException } from '../exceptions/Exceptions';

const request = supertest(app);

console.log('testing');

jest.mock('node-fetch', () => jest.fn());

jest.mock('../services/appService', () => {
  return {
    initializeDb: jest.fn(),
    getProducts: () => SAMPLE_PRODUCTS,
    login: jest.fn(),
    addProductToCart: jest.fn(),
    getUserId: () => SAMPLE_USER
  }
})

describe('App controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  it('GET / should return "Hello, World!"', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

  it('GET /products should return products', async () => {
    const response = await request.get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(SAMPLE_PRODUCTS)
  });

  it('POST /login should return user', async () => {
    (login as jest.Mock).mockImplementation(() => SAMPLE_USER);
    const response = await request.post('/login').send(SAMPLE_LOGIN_REQUEST);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(SAMPLE_USER);
  });

  it('POST /login should return error', async () => {
    let response = await request.post('/login').send(SAMPLE_INVALID_LOGIN_REQUEST_1)
    expect(response.status).toBe(400);
    expect(response.text).toBe('');

    response = await request.post('/login').send(SAMPLE_INVALID_LOGIN_REQUEST_2)
    expect(response.status).toBe(400);
    expect(response.text).toBe('');
  });

  it('POST /login should return invalid credentials', async () => {
    (login as jest.Mock).mockImplementation(() => { throw new UnauthorizedException()} )
    const response = await request.post('/login').send(SAMPLE_LOGIN_REQUEST)
    expect(response.status).toBe(401)
  });

  it('POST /cart should return cartContent', async () => {
    (addProductToCart as jest.Mock).mockImplementation(() => SAMPLE_CART )
    const response = await request.post('/cart').set('authorization', SAMPLE_USER.token).send(SAMPLE_ADD_CART_REQUEST)
    expect(response.status).toBe(200);
    expect(response.body).toEqual(SAMPLE_CART);
  });

  it('POST /cart should return 401', async () => {
    const response = await request.post('/cart').send(SAMPLE_ADD_CART_REQUEST);
    expect(response.status).toBe(401);
  });

});


describe('POST /login', () => {
  
  
});