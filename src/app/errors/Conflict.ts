import { CONFLICT_CODE } from '../configs/status-codes';

export class Conflict extends Error {
    public readonly statusCode: number = CONFLICT_CODE;
    public message: string;
    public errors: any[];

    constructor(message: string, errors: any = null) {
        super();
        this.message = message;
        this.errors = errors;
    }
}
