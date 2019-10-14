import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as RateLimit from 'express-rate-limit';
import * as expressValidator from 'express-validator';
import * as helmet from 'helmet';
import * as logger from 'morgan';

import corsOptions from './configs/cors';
import limiter from './configs/limiter';
import errorHandler from './middlewares/errorHandler';
import enableModules from './modules';

class Application {
    public app: express.Application;
    public router: express.Router;
    private limiter: express.RequestHandler;

    constructor() {
        this.app = express();
        this.initApp();
    }

    private initApp(): void {
        this.createLimiter();
        this.setupMiddlewares();
        this.setParams();
        this.setRouter();
        this.setErrorHandler();
        this.enableModules();
    }

    private setupMiddlewares(): void {
        if (this.app.get('env') !== 'production') {
            this.app.use(logger('dev'));
        }

        this.app.use(cors(corsOptions))
            .use(expressValidator())
            .use(express.json({ limit: 52428800 }))
            .use(express.urlencoded({ extended: true, parameterLimit: 52428800, limit: 52428800 }))
            .use(cookieParser())
            .use(this.limiter)
            .use(helmet());
    }

    private createLimiter(): void {
        this.limiter = new RateLimit(limiter);
    }

    private setParams(): void {
        this.app.set('json spaces', 4);
    }

    private setRouter(): void {
        this.router = express.Router();
        this.app.use(`/api`, this.router);
    }

    private setErrorHandler(): void {
        this.app.use(errorHandler);
    }

    private enableModules(): void {
        enableModules(this.router);
    }
}

export default (): any => new Application().app;
