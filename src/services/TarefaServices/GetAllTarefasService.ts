import Tarefa from "../../entities/tarefa";
import TarefaRepository from "../../repositories/TarefaRepository";

export class GetAllTarefasService {
  async execute(): Promise<Tarefa[]> {
    const tarefaRepository = new TarefaRepository();
    const tarefas = await tarefaRepository.list();

    return tarefas;
  }
}
