import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserCreate1684882291602 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE User (
            id INT NOT NULL AUTO_INCREMENT,
            id_type VARCHAR(255) NOT NULL,
            id_number VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            rol VARCHAR(255),
            state BOOLEAN NOT NULL,
            PRIMARY KEY (id)
            ) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE User`);
  }
}
