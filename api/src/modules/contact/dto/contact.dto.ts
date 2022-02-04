import { BaseIdentityDTO } from "src/infrastructure/dto/base-identity.dto";

export class ContactDTO extends BaseIdentityDTO {
  name: string;
  phone: string;
  gender: boolean;
  age: number;
}