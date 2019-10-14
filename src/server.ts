import { createServer, Server } from 'http';
import App from './app/app';
import params from './app/configs/params';
import db from '../db';

const server: Server = createServer(App());
const PID: number = process.pid;
const force: boolean = process.env.NODE_ENV === 'development' && process.argv[2] && process.argv[2] === 'force';

process.on('unhandledRejection', (err: Error) => {
    console.error(err);
    process.exit(1);
});

db.sequelize.authenticate()
    .then(() => {
        console.info('Connection has been established successfully.');

        return db.sequelize.sync({ force }).then(() => {
            server.listen(params.apiPort, () => {
                console.info(`Listening ${params.apiPort} port. Process: ${PID}`);
            });
        });
    })
    .catch((err: Error) => {
        console.error('Database connection: error - ' + err);
    });
