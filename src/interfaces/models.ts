import { Model } from 'sequelize';

export interface ITicket extends Model {
    readonly uuid: string;
    readonly ticketNumber: number;
    date: Date;
    firstName: string;
    lastName: string;
    identityCardNumber: string;
    routeId: string;
    isConfirmed: boolean;
}

export interface ITicketUpdate {
    ticketNumber?: number;
    date?: Date;
    firstName?: string;
    lastName?: string;
    identityCardNumber?: string;
    routeId?: string;
    isConfirmed?: boolean;
}
