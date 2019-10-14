import { BAD_REQUEST_CODE } from '../configs/status-codes';
import { SOMETHING_WENT_WRONG } from '../configs/constants';

export class ServiceUnavailable extends Error {
    public readonly statusCode: number = BAD_REQUEST_CODE;
    public message: string = SOMETHING_WENT_WRONG;
    public errors: any[];

    constructor(message: string, errors: any = null) {
        super();

        if (errors) {
            this.message = message;
            this.errors = errors;
        } else {
            if (typeof message === 'string') {
                this.message = message;
            } else {
                this.errors = message;
            }
        }
    }
}
