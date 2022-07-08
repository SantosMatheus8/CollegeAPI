import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEstudantes1657287262451 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "estudantes",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
            length: "45",
          },
          {
            name: "email",
            type: "varchar",
            length: "45",
          },
          {
            name: "senha",
            type: "varchar",
            length: "18",
          },
          {
            name: "data_nascimento",
            type: "timestamp",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("estudantes");
  }
}
