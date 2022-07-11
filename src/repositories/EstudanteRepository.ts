import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Estudante from "../entities/estudante";

export default class EstudanteRepository {
  private repository: Repository<Estudante>;

  constructor() {
    this.repository = AppDataSource.getRepository(Estudante);
  }
  async create({ nome, senha, email, dataNascimento }): Promise<Estudante> {
    const estudante = this.repository.create({
      nome,
      senha,
      email,
      dataNascimento,
    });
    const res = await this.repository.save(estudante);

    return res;
  }

  async list(): Promise<Estudante[]> {
    const estudantes = await this.repository.find();

    return estudantes;
  }

  async findById(id: number): Promise<Estudante | null> {
    const estudante = await this.repository.findOne({ where: { id } });

    return estudante;
  }
}
