import params from './params';
import { CorsOptions } from 'cors';

interface ICorsOptions {
    development: CorsOptions;
    production: CorsOptions;
}

const corsOptions: ICorsOptions = {
    development: {
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ],
        credentials: true,
        origin: /localhost:3000/
    },
    production: {
        allowedHeaders: [
            'Content-Type',
            'Authorization'
        ],
        credentials: true,
        origin: params.corsOrigins
    }
};

export default corsOptions[process.env.NODE_ENV || 'development'];
