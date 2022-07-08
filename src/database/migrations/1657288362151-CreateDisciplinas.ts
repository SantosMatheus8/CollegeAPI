import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDisciplinas1657288362151 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "disciplinas",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "estudante_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "nome",
            type: "varchar",
            length: "45",
          },
          {
            name: "carga_horaria",
            type: "int",
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
        foreignKeys: [
          {
            columnNames: ["estudante_id"],
            referencedTableName: "estudantes",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("disciplinas");
  }
}
