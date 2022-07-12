import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEstudantesDisciplinas1657626295037
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "estudantes_disciplinas",
        columns: [
          {
            name: "estudante_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "disciplina_id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "created_at",
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
          {
            columnNames: ["disciplina_id"],
            referencedTableName: "disciplinas",
            referencedColumnNames: ["id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("estudantes_disciplinas");
  }
}
