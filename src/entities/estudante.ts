import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
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

  @Column()
  dataNascimento: Date;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAp: Date;
}
