import { Disciplina } from "../../entities/disciplina";
import DisciplinaRepository from "../../repositories/DisciplinaRepository";

type GetDisciplinaByIdDTO = {
  id: number;
};

export class GetDisciplinaByIdService {
  async execute({ id }: GetDisciplinaByIdDTO): Promise<Disciplina | Error> {
    const disciplinaRepository = new DisciplinaRepository();
    const disciplina = await disciplinaRepository.findById(id);

    if (!disciplina) {
      return new Error("Disciplina informada não existe");
    }

    return disciplina;
  }
}
