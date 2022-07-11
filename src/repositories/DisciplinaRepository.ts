import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Disciplina } from "../entities/disciplina";

export default class DisciplinaRepository {
  private repository: Repository<Disciplina>;

  constructor() {
    this.repository = AppDataSource.getRepository(Disciplina);
  }

  async create({ nome, cargaHoraria, estudantes }): Promise<Disciplina> {
    const disciplina = this.repository.create({
      nome,
      cargaHoraria,
      estudantes,
    });
    const res = await this.repository.save(disciplina);

    return res;
  }

  async list(): Promise<Disciplina[]> {
    const disciplinas = await this.repository.find();

    return disciplinas;
  }

  async findById(id: number): Promise<Disciplina | null> {
    const disciplina = await this.repository.findOne({ where: { id } });

    return disciplina;
  }
}
