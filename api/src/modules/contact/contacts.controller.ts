import { Body, Get, Param, Patch, Post, Scope, } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MirroringController } from 'src/app/decorators/mirroring-controller.decorator';
import { ContactService } from './contacts.service';
import { ContactDTO } from './dto/contact.dto';
import { CreateContactDTO } from './dto/create-contact.dto';
import { UpdateContactDTO } from './dto/update-contact.dto';

@ApiTags('Contact')
@ApiBearerAuth('access-token')
@MirroringController({
  path: __dirname,
  scope: Scope.DEFAULT,
})
export class ContactsController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() contact: CreateContactDTO): Promise<ContactDTO> {
    return this.contactService.create(contact)
  }

  @Get()
  findAll(): Promise<ContactDTO[]> {
    return this.contactService.findAll()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: UpdateContactDTO): Promise<ContactDTO> {
    return this.contactService.update(id, updateData)
  }
}
