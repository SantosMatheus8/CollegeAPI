import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Estudante from "./estudante";

@Entity("tarefas")
export default class Tarefa {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  descricao: string;

  @Column()
  dataEntrega: Date;

  @ManyToOne(() => Estudante, (estudante) => estudante.tarefa)
  @JoinTable({ name: "estudante_id" })
  estudantes: Estudante[];
}
