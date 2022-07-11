import { Disciplina } from "../../entities/disciplina";
import DisciplinaRepository from "../../repositories/DisciplinaRepository";

export class GetAllDisciplinasService {
  async execute(): Promise<Disciplina[]> {
    const disciplinaRepository = new DisciplinaRepository();
    const disciplinas = await disciplinaRepository.list();

    return disciplinas;
  }
}
