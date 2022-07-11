import Estudante from "../../entities/estudante";
import Tarefa from "../../entities/tarefa";
import TarefaRepository from "../../repositories/TarefaRepository";

type CreateTarefaDTO = {
  descricao: string;
  dataEntrega: Date;
  estudantes: Estudante;
};

export class CreateTarefaService {
  async execute({
    descricao,
    dataEntrega,
    estudantes,
  }: CreateTarefaDTO): Promise<Tarefa> {
    const tarefaRepository = new TarefaRepository();
    const res = await tarefaRepository.create({
      descricao,
      dataEntrega,
      estudantes,
    });

    return res;
  }
}
