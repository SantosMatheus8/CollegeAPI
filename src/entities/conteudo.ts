import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("conteudos")
export default class Conteudo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  descricao: string;

  @Column({ length: 255 })
  linkConteudo: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAp: Date;
}
