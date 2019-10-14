import { DataTypes, Sequelize, Model, BuildOptions } from 'sequelize';
import { ITicket } from '../../src/interfaces/models';

type StaticTicket = typeof Model & {
    new (values?: object, options?: BuildOptions): ITicket;
};

export default (sequelize: Sequelize) => {
    return <StaticTicket> sequelize.define('tickets', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        ticketNumber: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        // This a foreign key but the table is not ready / created
        routeId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }
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
