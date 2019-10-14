export const required: (resource: string) => string = (resource: string): string => `${resource} is required`;
export const invalid: (resource: string) => string = (resource: string): string => `${resource} is invalid`;
export const alreadyExists: (resource: string) => string = (resource: string): string => `${resource} already exists!`;
export const notExists: (resource: string) => string  = (resource: string): string => `${resource} doesn't exist!`;
