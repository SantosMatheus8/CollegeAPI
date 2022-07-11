import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Disciplina } from "./disciplina";

@Entity("conteudos")
export default class Conteudo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  descricao: string;

  @Column({ length: 255 })
  linkConteudo: string;

  @OneToOne(() => Disciplina, (disciplina) => disciplina.conteudo)
  @JoinColumn({ name: "disciplina_id" })
  disciplina: Disciplina;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
