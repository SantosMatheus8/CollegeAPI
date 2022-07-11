import { AppDataSource } from "../../data-source";
import Tarefa from "../../entities/tarefa";

type DeleteTarefaDTO = {
  id: number;
};

export class DeleteTarefaService {
  async execute({ id }: DeleteTarefaDTO): Promise<Tarefa | Error> {
    const repo = AppDataSource.getRepository(Tarefa);
    const tarefa = await repo.findOne({ where: { id } });

    if (!tarefa) {
      return new Error("Tarefa informada não existe");
    }

    await repo.remove(tarefa);

    return tarefa;
  }
}
