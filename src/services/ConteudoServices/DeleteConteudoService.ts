import { AppDataSource } from "../../data-source";
import Conteudo from "../../entities/conteudo";

type DeleteConteudoDTO = {
  id: number;
};

export class DeleteConteudoService {
  async execute({ id }: DeleteConteudoDTO): Promise<Conteudo | Error> {
    const repo = AppDataSource.getRepository(Conteudo);
    const conteudo = await repo.findOne({ where: { id } });

    if (!conteudo) {
      return new Error("Conteudo informado não existe");
    }
    await repo.remove(conteudo);

    return conteudo;
  }
}
