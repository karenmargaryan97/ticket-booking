import models from '../../../db';
import { ITicket, ITicketUpdate } from '../../interfaces/models';
import { BadRequest } from '../errors';

export class TicketService {
    public async create(ticket: ITicket): Promise<ITicket> {
        const [existingTicket]: any = await models.Ticket.findAll({
            where: {
                ticketNumber: ticket.ticketNumber,
                identityCardNumber: ticket.identityCardNumber,
                bookDate: ticket.bookDate,
                bookTime: ticket.bookTime,
            },
            raw: true
        });

        if (existingTicket) {
            if (existingTicket.isConfirmed) {
                throw new BadRequest('Ticket has already been booked');
            } else {
                throw new BadRequest('Ticket draft has already been created. Please, confirm');
            }
        }

        return models.Ticket.create(ticket);
    }

    public async findById(id: string | number): Promise<ITicket> {
        return models.Ticket.findByPk(id);
    }

    public async update(id: string | number, attributes: ITicketUpdate): Promise<ITicket> {
        const [updated, [ticket]] = await models.Ticket.update(attributes, {
            where: { id },
            returning: true,
            raw: true
        });

        return updated ? ticket : null;
    }
}

export default new TicketService();
