import { AppDataSource } from "../../data-source";
import Conteudo from "../../entities/conteudo";

type UpdateConteudoDTO = {
  id: number;
  descricao?: string;
  linkConteudo?: string;
};

export class UpdateConteudoService {
  async execute({
    id,
    descricao,
    linkConteudo,
  }: UpdateConteudoDTO): Promise<Conteudo | Error> {
    const repo = AppDataSource.getRepository(Conteudo);

    const conteudo = await repo.findOne({ where: { id } });

    if (!conteudo) {
      return new Error("Conteudo informado não existe");
    }

    conteudo.descricao = descricao ? descricao : conteudo.descricao;
    conteudo.linkConteudo = linkConteudo ? linkConteudo : conteudo.linkConteudo;

    await repo.save(conteudo);

    return conteudo;
  }
}
