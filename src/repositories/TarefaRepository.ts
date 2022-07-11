import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Tarefa from "../entities/tarefa";

export default class TarefaRepository {
  private repository: Repository<Tarefa>;

  constructor() {
    this.repository = AppDataSource.getRepository(Tarefa);
  }

  async create({ descricao, dataEntrega, estudantes }): Promise<Tarefa> {
    const tarefa = this.repository.create({
      descricao,
      dataEntrega,
      estudantes,
    });
    const res = await this.repository.save(tarefa);

    return res;
  }

  async list(): Promise<Tarefa[]> {
    const tarefas = await this.repository.find();

    return tarefas;
  }

  async findById(id: number): Promise<Tarefa | null> {
    const tarefa = await this.repository.findOne({ where: { id } });

    return tarefa;
  }
}
