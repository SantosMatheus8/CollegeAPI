import { AppDataSource } from "../../data-source";
import Conteudo from "../../entities/conteudo";

export class GetAllConteudoService {
  async execute(): Promise<Conteudo[]> {
    const repo = AppDataSource.getRepository(Conteudo);
    const conteudos = await repo.find();

    return conteudos;
  }
}
