import models from '../../../db';
import { ITicket, ITicketUpdate } from '../../interfaces/models';
import { BadRequest } from '../errors';

export class TicketService {
    public async create(ticket: ITicket): Promise<ITicket> {
        const [existingTicket]: any = await models.Ticket.findAll({
            where: {
                routeId: ticket.routeId,
                identityCardNumber: ticket.identityCardNumber,
                date: ticket.date
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

        return models.Ticket.build(ticket).save();
    }

    public async findById(uuid: string | number): Promise<ITicket> {
        return models.Ticket.findByPk(uuid);
    }

    public async update(uuid: string | number, attributes: ITicketUpdate): Promise<ITicket> {
        const [updated, [ticket]] = await models.Ticket.update(attributes, {
            where: { uuid },
            returning: true,
            raw: true
        });

        return updated ? ticket : null;
    }
}
