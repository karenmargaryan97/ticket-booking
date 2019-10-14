import { Router } from 'express';
import TicketModule from './ticket';

export default (router: Router): void => {
    const ticket: TicketModule = new TicketModule(router);

    const modules: any = [
        ticket
    ];

    modules.forEach((module: any) => module.createEndpoints());
};
