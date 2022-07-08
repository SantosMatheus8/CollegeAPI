import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tarefas")
export default class Tarefa {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  descricao: string;

  @Column()
  dataEntrega: Date;
}
