import express, { Request, Response, NextFunction } from 'express';
import { Product, CartContent } from './types';
import { addProductToCart, getProducts, initializeDb, login } from './services/appService';
import { Database } from './database/Database';
import { validateLoginRequest } from './helper';
import addProductToCartMiddleware from './middlewares/cartMiddleware';
import bodyParser from 'body-parser';
import { ERROR_MESSAGES } from './constants';


const app = express();
export const db = new Database();

app.use(bodyParser.json());

initializeDb();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/products', async (req: Request, res: Response) => {
  try {
    const products: Product[] = await getProducts();
    res.send(products);
  } catch(error) {
    res.status(400).send(error);
  }
});

app.post('/login', async (req: Request, res: Response) => {
  try {
    const { body } = req;
    if(!validateLoginRequest(body)) {
      res.status(400).send()
    }
    const response = await login(body);
    res.send(response);
  } 
  catch(UnauthorizedException) {
    res.status(401).end()
  } 
});

app.post('/cart', addProductToCartMiddleware, async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const cartContent: CartContent = await addProductToCart(req.body.productId, req.userId);
    res.send(cartContent);
  } catch(error) {
      res.status(400).send(error)
  }
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send();
});

export default app;
