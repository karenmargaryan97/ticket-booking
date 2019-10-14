import { NOT_FOUND_CODE } from '../configs/status-codes';

export class NotFound extends Error {
    public readonly statusCode: number = NOT_FOUND_CODE;
    public message: string;
    public errors: any[];

    constructor(message: string, errors: any = null) {
        super();
        this.message = message;
        this.errors = errors;
    }
}
