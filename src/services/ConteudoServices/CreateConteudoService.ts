import Conteudo from "../../entities/conteudo";
import ConteudoRepository from "../../repositories/ConteudoRepository";
import DisciplinaRepository from "../../repositories/DisciplinaRepository";

type CreateConteudoDTO = {
  descricao: string;
  linkConteudo: string;
  disciplinaId: number;
};

export class CreateConteudoService {
  async execute({
    descricao,
    linkConteudo,
    disciplinaId,
  }: CreateConteudoDTO): Promise<Conteudo> {
    const conteudoRepository = new ConteudoRepository();
    const disciplinaRepository = new DisciplinaRepository();

    const disciplina = await disciplinaRepository.findById(disciplinaId);

    if (!disciplina) {
      throw new Error("Disciplina não encontrada");
    }
    const res = await conteudoRepository.create({
      descricao,
      linkConteudo,
      disciplina,
    });

    return res;
  }
}
