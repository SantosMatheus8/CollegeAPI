import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("disciplinas")
export class Disciplina {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column()
  cargaHoraria: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAp: Date;
}
