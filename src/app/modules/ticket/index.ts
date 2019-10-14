import { Router } from 'express';
import ticketEndpoints from './endpoints';

export default class TaskModule {
    public apiRouter: Router;
    public readonly router: Router;

    constructor(apiRouter: Router) {
        this.apiRouter = apiRouter;
        this.router = Router();
    }

    public createEndpoints(): void {
        this.assignRouter();
        this.assignEndpoints();
    }

    public assignRouter(): void {
        this.apiRouter.use('/tickets', this.router);
    }

    public assignEndpoints(): void {
        ticketEndpoints(this.router);
    }
}
