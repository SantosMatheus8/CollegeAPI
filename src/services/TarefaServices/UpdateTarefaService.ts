import { AppDataSource } from "../../data-source";
import Estudante from "../../entities/estudante";
import Tarefa from "../../entities/tarefa";

type UpdateTarefaDTO = {
  id: number;
  descricao: string;
  dataEntrega: Date;
  estudantes: Estudante[];
};

export class UpdateTarefaService {
  async execute({
    id,
    descricao,
    dataEntrega,
    estudantes,
  }: UpdateTarefaDTO): Promise<Tarefa | Error> {
    const repo = AppDataSource.getRepository(Tarefa);

    const tarefa = await repo.findOne({ where: { id } });

    if (!tarefa) {
      return new Error("Tarefa informada não existe");
    }

    tarefa.descricao = descricao ? descricao : tarefa.descricao;
    tarefa.dataEntrega = dataEntrega ? dataEntrega : tarefa.dataEntrega;
    tarefa.estudantes = estudantes ? estudantes : tarefa.estudantes;

    await repo.save(tarefa);

    return tarefa;
  }
}
