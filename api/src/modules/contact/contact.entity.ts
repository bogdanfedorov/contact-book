import { BaseEntity } from "src/infrastructure/db/base-entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Contact extends BaseEntity {
  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  gender: boolean;

  @Column()
  age: number;
}