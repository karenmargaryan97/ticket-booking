import {
    apiPort,
    apiUrl,
    dbUsername,
    dbPassword,
    database,
    dbHost
} from '../helpers/config';

const params: any = {
    development: {
        apiPort,
        apiUrl,
        dbUsername,
        dbPassword,
        database,
        dbHost
    },
    production: {
        apiPort,
        apiUrl,
        dbUsername,
        dbPassword,
        database,
        dbHost
    }
};

export default params[process.env.NODE_ENV || 'development'];
