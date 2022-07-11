import { AppDataSource } from "../../data-source";
import Conteudo from "../../entities/conteudo";

type GetConteudoByIdDTO = {
  id: number;
};

export class GetConteudoByIdService {
  async execute({ id }: GetConteudoByIdDTO): Promise<Conteudo | Error> {
    const repo = AppDataSource.getRepository(Conteudo);

    const conteudo = await repo.findOne({ where: { id } });

    if (!conteudo) {
      return new Error("Conteudo informado não existe");
    }

    return conteudo;
  }
}
