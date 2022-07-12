import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Disciplina } from "./disciplina";
import Tarefa from "./tarefa";

@Entity("estudantes")
export default class Estudante {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  nome: string;

  @Column({ length: 45 })
  email: string;

  @Column({ length: 18 })
  senha: string;

  @Column({ name: "data_nascimento" })
  dataNascimento: Date;

  @ManyToMany(() => Disciplina, (disciplina) => disciplina.estudantes)
  disciplina: Disciplina;

  @OneToMany(() => Tarefa, (tarefa) => tarefa.estudantes)
  tarefa: Tarefa;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAp: Date;
}
