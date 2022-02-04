import {MigrationInterface, QueryRunner} from "typeorm";

export class contact1643941312120 implements MigrationInterface {
    name = 'contact1643941312120'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "contact" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "name" character varying NOT NULL,
                "phone" character varying NOT NULL,
                "gender" boolean NOT NULL,
                "age" integer NOT NULL,
                CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "contact"
        `);
    }

}
