import * as dotenv from 'dotenv';
import * as path from 'path';
import { parse } from 'pg-connection-string';
import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const pgURL = parse(process.env.DATABASE_URL || '');
enum EnvBooleans {
    TRUE = '1',
    FALSE = '0',
}

export default {
    logging: 'all',
    type: 'postgres',
    host: process.env.PG_URL,
    port: 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB_NAME,
    entities: [__dirname + '/../modules/**/*{.ts,.js}'],
    migrations: [__dirname + '/db/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: __dirname + '/db/migrations',
    },
    synchronize: process.env.PG_SYNCHRONIZE === EnvBooleans.TRUE,
    migrationsRun: process.env.PG_RUN_MIGRATIONS === EnvBooleans.TRUE,
} as PostgresConnectionOptions;
