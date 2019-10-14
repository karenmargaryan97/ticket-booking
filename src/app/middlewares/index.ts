import validator from './validator';

type IFunction = () => void;

export default (schemas: any, actionName: string): any => {
    const middlewares: IFunction[] = [];

    if (!schemas[actionName]) {
        return middlewares;
    }

    if (schemas[actionName].validation) {
        middlewares.push(validator(schemas[actionName].validation));
    }

    return middlewares;
};
