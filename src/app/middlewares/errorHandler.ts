import { ServiceUnavailable } from '../errors';
import { BAD_REQUEST_CODE } from '../configs/status-codes';
import { Request, Response, NextFunction } from 'express';
import { IError } from '../../interfaces/globals';

export default async (err: IError, req: Request, res: Response, next: NextFunction): Promise<Response> => {
    if (!err.statusCode) {
        next(new ServiceUnavailable(err.message));
    }

    const statusCode: number = err.statusCode || BAD_REQUEST_CODE;

    return res.status(statusCode).json({
        body: req.body,
        errors: err.errors || null,
        message: err.message || '',
        statusCode
    });
};
