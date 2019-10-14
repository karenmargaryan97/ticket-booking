import { BAD_REQUEST_CODE } from '../configs/status-codes';

export class BadRequest extends Error {
    public readonly statusCode: number = BAD_REQUEST_CODE;
    public message: string;
    public errors: any[];

    constructor(message: string, errors: any = null) {
        super();
        this.message = message;
        this.errors = errors;
    }
}
