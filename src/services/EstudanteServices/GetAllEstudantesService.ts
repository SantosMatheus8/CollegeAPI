import { AppDataSource } from "../../data-source";
import Estudante from "../../entities/estudante";

export class GetAllEstudantesService {
  async execute(): Promise<Estudante[]> {
    const repo = AppDataSource.getRepository(Estudante);
    const estudantes = await repo.find();

    return estudantes;
  }
}
