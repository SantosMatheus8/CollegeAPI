import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Conteudo from "../entities/conteudo";

export default class ConteudoRepository {
  private repository: Repository<Conteudo>;

  constructor() {
    this.repository = AppDataSource.getRepository(Conteudo);
  }

  async create({ descricao, linkConteudo, disciplina }): Promise<Conteudo> {
    const conteudo = this.repository.create({
      descricao,
      linkConteudo,
      disciplina,
    });
    const res = await this.repository.save(conteudo);

    return res;
  }

  async list(): Promise<Conteudo[]> {
    const conteudos = await this.repository.find();

    return conteudos;
  }

  async findById(id: number): Promise<Conteudo | null> {
    const conteudo = await this.repository.findOne({ where: { id } });

    return conteudo;
  }
}
