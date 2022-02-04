import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
import { ContactsController } from './contacts.controller';
import { ContactService } from './contacts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [ContactsController],
  providers: [ContactService]
})
export class ContactModule {}
