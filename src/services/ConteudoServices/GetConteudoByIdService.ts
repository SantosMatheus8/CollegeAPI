import { AppDataSource } from "../../data-source";
import Conteudo from "../../entities/conteudo";
import ConteudoRepository from "../../repositories/ConteudoRepository";

type GetConteudoByIdDTO = {
  id: number;
};

export class GetConteudoByIdService {
  async execute({ id }: GetConteudoByIdDTO): Promise<Conteudo | Error> {
    const conteudoRepository = new ConteudoRepository();

    const conteudo = await conteudoRepository.findById(id);

    if (!conteudo) {
      return new Error("Conteudo informado não existe");
    }

    return conteudo;
  }
}
