import Estudante from "../../entities/estudante";
import Tarefa from "../../entities/tarefa";
import EstudanteRepository from "../../repositories/EstudanteRepository";
import TarefaRepository from "../../repositories/TarefaRepository";

type CreateTarefaDTO = {
  descricao: string;
  dataEntrega: Date;
  estudanteId: Estudante;
};

export class CreateTarefaService {
  async execute({
    descricao,
    dataEntrega,
    estudanteId,
  }: CreateTarefaDTO): Promise<Tarefa | Error> {
    const tarefaRepository = new TarefaRepository();
    const estudanteRepository = new EstudanteRepository();

    const estudantes = await estudanteRepository.findById(Number(estudanteId));

    if (!estudantes) {
      return new Error("Estudante não encontrado");
    }

    dataEntrega = new Date(dataEntrega);

    const res = await tarefaRepository.create({
      descricao,
      dataEntrega,
      estudantes,
    });

    return res;
  }
}
