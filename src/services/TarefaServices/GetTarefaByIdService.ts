import Tarefa from "../../entities/tarefa";
import TarefaRepository from "../../repositories/TarefaRepository";

type GetTarefaByIdDTO = {
  id: number;
};

export class GetTarefaByIdService {
  async execute({ id }: GetTarefaByIdDTO): Promise<Tarefa | Error> {
    const tarefaRepository = new TarefaRepository();
    const tarefa = await tarefaRepository.findById(id);

    if (!tarefa) {
      return new Error("Tarefa informada não existe");
    }

    return tarefa;
  }
}
