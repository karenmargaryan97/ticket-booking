import { NextFunction, Request, Response } from 'express';
import { ITicket, ITicketUpdate } from '../../../interfaces/models';
import { CREATED_CODE, SUCCESS_CODE } from '../../configs/status-codes';
import TicketService from '../../services/ticket.service';
import { BadRequest, NotFound } from '../../errors';
import { notExists } from '../../helpers/helperMethods';

export class TicketController {
    public async bookTicket(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const payload: ITicket = req.body;
        try {
            const data: any = {
                routeId: payload.routeId,
                ticketNumber: payload.ticketNumber,
                bookDate: payload.bookDate,
                bookTime: payload.bookTime,
                firstName: payload.firstName,
                lastName: payload.lastName,
                identityCardNumber: payload.identityCardNumber
            };

            const ticket: ITicket = await TicketService.create(data);

            return res.status(CREATED_CODE).json(ticket);
        } catch (e) {
            next(e);
        }
    }

    public async confirmBook(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const payload: ITicket = req.body;
        try {
            const ticket: ITicket = await TicketService.findById(req.params.id);

            if (!ticket) {
                throw new NotFound(notExists('ticket'));
            } else if (ticket && ticket.isConfirmed) {
                throw new BadRequest('Ticket already confirmed');
            }

            const data: ITicketUpdate = {
                ticketNumber: payload.ticketNumber,
                routeId: payload.routeId,
                bookDate: payload.bookDate,
                bookTime: payload.bookTime,
                firstName: payload.firstName,
                lastName: payload.lastName,
                identityCardNumber: payload.identityCardNumber,
                isConfirmed: true
            };

            const updatedTicket: ITicket = await TicketService.update(ticket.id, data);


            return res.status(CREATED_CODE).json(updatedTicket);
        } catch (e) {
            next(e);
        }
    }

    public async getTicket(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const ticket: ITicket = await TicketService.findById(req.params.id);

            if (!ticket) {
                throw new NotFound(notExists('ticket'));
            }

            return res.status(SUCCESS_CODE).json(ticket);
        } catch (e) {
            next(e);
        }
    }
}
