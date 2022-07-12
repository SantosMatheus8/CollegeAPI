import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Conteudo from "./conteudo";
import Estudante from "./estudante";

@Entity("disciplinas")
export class Disciplina {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column({ name: "carga_horaria" })
  cargaHoraria: number;

  @ManyToMany(() => Estudante, (estudante) => estudante.disciplina)
  @JoinTable({
    name: "estudantes_disciplinas",
    joinColumn: {
      name: "disciplina_id",
    },
    inverseJoinColumn: {
      name: "estudante_id",
    },
  })
  estudantes: Estudante[];

  @OneToOne(() => Conteudo, (conteudo) => conteudo.disciplina)
  conteudo: Conteudo;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAp: Date;
}
