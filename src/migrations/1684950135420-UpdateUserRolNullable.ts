import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserRolNullable1684950135420 implements MigrationInterface {
  name = 'UpdateUserRolNullable1684950135420';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "rol" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "rol" SET NOT NULL`,
    );
  }
}
