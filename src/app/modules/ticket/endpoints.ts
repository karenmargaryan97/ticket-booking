import { Router } from 'express';
import middlewares from '../../middlewares/index';
import schemas from './schemas';
import { TicketController } from './ticket.controller';

export default (router: Router): void => {
    router.post('/', ...middlewares(schemas, 'save'), new TicketController().bookTicket);
    router.put('/:id', ...middlewares(schemas, 'save'), new TicketController().confirmBook);
    router.get('/:id', ...middlewares(schemas, 'ticket'), new TicketController().getTicket);
};
