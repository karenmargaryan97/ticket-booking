import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    config();
}

import * as env from 'env-var';

export const apiUrl: string = env.get('API_URL').asString();
export const apiPort: string = env.get('PORT').asString();

export const database: string = env.get('POSTGRES_DB').asString();
export const dbUsername: string = env.get('POSTGRES_USER').asString();
export const dbPassword: string = env.get('POSTGRES_PASSWORD').asString();
export const dbHost: string = env.get('POSTGRES_HOST').asString();
