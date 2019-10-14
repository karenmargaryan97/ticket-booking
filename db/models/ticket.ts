import { DataTypes, Sequelize, Model, BuildOptions } from 'sequelize';
import { ITicket } from '../../src/interfaces/models';

type StaticTicket = typeof Model & {
    new (values?: object, options?: BuildOptions): ITicket;
};

export default (sequelize: Sequelize) => {
    return <StaticTicket> sequelize.define('tickets', {
        ticketNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // This a foreign key but the table is not ready / created
        routeId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Type string is appropriate for testing
        bookDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        identityCardNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        isConfirmed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};
