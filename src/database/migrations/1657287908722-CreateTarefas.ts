import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTarefas1657287908722 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tarefas",
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
            name: "descricao",
            type: "varchar",
            length: "255",
          },
          {
            name: "data_entrega",
            type: "timestamp",
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
    queryRunner.dropTable("tarefas");
  }
}
