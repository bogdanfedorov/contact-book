import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Contact } from "./contact.entity";
import { ContactDTO } from "./dto/contact.dto";
import { CreateContactDTO } from "./dto/create-contact.dto";
import { UpdateContactDTO } from "./dto/update-contact.dto";

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>
  ) {}

  create(contact: CreateContactDTO): Promise<ContactDTO> {
    try {
      const newContact = this.contactRepository.create(contact)

      return this.contactRepository.save(newContact)
    } catch (error) {
      return null;
    }
  }

  findAll(): Promise<ContactDTO[]> {
    return this.contactRepository.find()
  }

  async update(id: string, updateData: UpdateContactDTO): Promise<ContactDTO> {
    const contact = await this.contactRepository.findOne({ where: { id } })
    this.contactRepository.merge(contact, updateData);
    return this.contactRepository.save(contact)

  }
}
