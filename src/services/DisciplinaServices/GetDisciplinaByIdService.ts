import { Disciplina } from "../../entities/disciplina";
import DisciplinaRepository from "../../repositories/DisciplinaRepository";

type GetClassByIdDTO = {
  id: number;
};

export class GetClassByIdService {
  async execute({ id }: GetClassByIdDTO): Promise<Disciplina | Error> {
    const disciplinaRepository = new DisciplinaRepository();
    const disciplina = await disciplinaRepository.findById(id);

    if (!disciplina) {
      return new Error("Disciplina informada não existe");
    }

    return disciplina;
  }
}
