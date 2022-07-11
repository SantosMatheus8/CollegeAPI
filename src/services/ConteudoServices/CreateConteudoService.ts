import { AppDataSource } from "../../data-source";
import Conteudo from "../../entities/conteudo";
import { Disciplina } from "../../entities/disciplina";

type CreateConteudoDTO = {
  descricao: string;
  linkConteudo: string;
  disciplina: Disciplina;
};

export class CreateConteudoService {
  async execute({
    descricao,
    linkConteudo,
    disciplina,
  }: CreateConteudoDTO): Promise<Conteudo> {
    const repo = AppDataSource.getRepository(Conteudo);
    const res = await repo.save({ descricao, linkConteudo, disciplina });

    return res;
  }
}
