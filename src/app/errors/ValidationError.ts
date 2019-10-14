import { VALIDATION_ERROR_CODE } from '../configs/status-codes';
import { VALIDATION_ERROR } from '../configs/constants';

export class ValidationError extends Error {
    public readonly statusCode: number = VALIDATION_ERROR_CODE;
    public message: string = VALIDATION_ERROR;
    public errors: any[];

    constructor(errors: any) {
        super();
        this.errors = errors;
    }
}
