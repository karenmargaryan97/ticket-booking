import { Model } from 'sequelize';

export interface ITicket extends Model {
    readonly id: number;
    ticketNumber: string;
    bookDate: Date;
    bookTime: string;
    firstName: string;
    lastName: string;
    identityCardNumber: string;
    routeId: string;
    isConfirmed: boolean;
}

export interface ITicketUpdate {
    ticketNumber: string;
    bookDate?: Date;
    bookTime?: string;
    firstName?: string;
    lastName?: string;
    identityCardNumber?: string;
    routeId?: string;
    isConfirmed?: boolean;
}
