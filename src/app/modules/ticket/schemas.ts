import { required } from '../../helpers/helperMethods';

export default {
    save: {
        validation: {
            ticketNumber: {
                in: 'body',
                notEmpty: {
                    errorMessage: required('Ticket Number')
                }
            },
            bookDate: {
                in: 'body',
                notEmpty: {
                    errorMessage: required('Book Date')
                }
            },
            bookTime: {
                in: 'body',
                notEmpty: {
                    errorMessage: required('Book Date')
                }
            },
            routeId: {
                in: 'body',
                notEmpty: {
                    errorMessage: required('Route Id')
                }
            },
            firstName: {
                in: 'body',
                notEmpty: {
                    errorMessage: required('First Name')
                }
            },
            lastName: {
                in: 'body',
                notEmpty: {
                    errorMessage: required('Last Name')
                }
            },
            identityCardNumber: {
                in: 'body',
                notEmpty: {
                    errorMessage: required('Identity Card Number')
                }
            }
        }
    },
    ticket: {
        validation: {
            id: {
                in: 'params',
                notEmpty: {
                    errorMessage: required('Id')
                }
            }
        }
    }
};
