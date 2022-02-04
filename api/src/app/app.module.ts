import * as dotenv from 'dotenv';
import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from 'src/modules/contact/contact.module';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.PG_URL,
            port: Number(process.env.PG_PORT),
            username: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DB_NAME,
            synchronize: true,
            entities: [__dirname + '/../modules/**/*{.ts,.js}']
        }),
        ContactModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
