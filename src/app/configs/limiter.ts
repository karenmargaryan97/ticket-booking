import { Options } from 'express-rate-limit';

interface IRateLimit {
    development: Options;
    production: Options;
    test: Options;
}

const limiter: IRateLimit = {
    development: {
        max: 2500,
        windowMs: 15 * 60 * 1000 // 15 minutes
    },
    production: {
        max: 100,
        windowMs: 15 * 60 * 1000 // 15 minutes
    },
    test: {
        max: 100,
        windowMs: 15 * 60 * 1000 // 15 minutes
    }
};
export default limiter[process.env.NODE_ENV || 'development'];
