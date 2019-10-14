import { Sequelize } from 'sequelize';
import params from '../src/app/configs/params';
import Ticket from './models/ticket';

const db: Sequelize = new Sequelize(
    params.database,
    params.dbUsername,
    params.dbPassword,
    {
        dialect: 'postgres',
        host: params.dbHost
    }
);

const models: any = {
    Ticket: db.import('./models/ticket', Ticket)
};

Object.keys(models).forEach((modelName: string) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = db;
models.Sequelize = Sequelize;

export default models;
