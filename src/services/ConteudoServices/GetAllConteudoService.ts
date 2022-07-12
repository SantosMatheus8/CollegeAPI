import Conteudo from "../../entities/conteudo";
import ConteudoRepository from "../../repositories/ConteudoRepository";

export class GetAllConteudoService {
  async execute(): Promise<Conteudo[]> {
    const conteudoRepository = new ConteudoRepository();
    const conteudos = await conteudoRepository.list();

    return conteudos;
  }
}
