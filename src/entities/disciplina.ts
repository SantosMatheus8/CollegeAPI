import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Estudante from "./estudante";

@Entity("disciplinas")
export class Disciplina {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column()
  cargaHoraria: number;

  @ManyToMany(() => Estudante, (estudante) => estudante)
  @JoinTable()
  estudantes: Estudante[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAp: Date;
}
