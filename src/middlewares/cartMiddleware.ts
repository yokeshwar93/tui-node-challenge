import { Request, Response, NextFunction } from 'express';
import { getUserId } from '../services/appService';

const addProductToCartMiddleware = async (request: Request, response: Response, next: NextFunction) => {
    const token = request.headers.authorization;
    if(!token) {
        response.status(401).end();
        return;
    }
    const userId = await getUserId(token);
    if(userId === 0) {
        response.status(401).end();
        return;
    }
    /// @ts-ignore
    request.userId = userId;
    next()
}

export default addProductToCartMiddleware;