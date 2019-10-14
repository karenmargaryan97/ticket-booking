import { FORBIDDEN_CODE } from '../configs/status-codes';
import { PERMISSION_DENIED } from '../configs/constants';

export class Forbidden extends Error {
    public readonly statusCode: number = FORBIDDEN_CODE;
    public message: string = PERMISSION_DENIED;
    public errors: any[];

    constructor(errors: any = null) {
        super();
        this.errors = errors;
    }
}
