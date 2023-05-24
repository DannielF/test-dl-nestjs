import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1684945851033 implements MigrationInterface {
  name = 'CreateUserTable1684945851033';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "id_type" character varying(20) NOT NULL, "id_number" character varying(20) NOT NULL, "name" character varying(20) NOT NULL, "last_name" character varying(20) NOT NULL, "email" character varying(20) NOT NULL, "phone" character varying(20) NOT NULL, "address" character varying(20) NOT NULL, "rol" character varying(20) NOT NULL, "state" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
