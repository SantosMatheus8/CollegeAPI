import { Disciplina } from "../../entities/disciplina";
import DisciplinaRepository from "../../repositories/DisciplinaRepository";
import EstudanteRepository from "../../repositories/EstudanteRepository";

type CreateEstudantesDisciplinasDTO = {
  estudanteId: number;
  disciplinaId: number;
};

export class CreateEstudantesDisciplinasService {
  async execute({
    estudanteId,
    disciplinaId,
  }: CreateEstudantesDisciplinasDTO): Promise<Disciplina | Error> {
    const estudanteRepository = new EstudanteRepository();
    const disciplinaRepository = new DisciplinaRepository();

    const disciplina = await disciplinaRepository.findById(disciplinaId);
    const estudante = await estudanteRepository.findById(estudanteId);

    if (!disciplina) {
      return new Error("Disciplina informada não existe");
    }
    if (!disciplina) {
      return new Error("Disciplina informada não existe");
    }

    disciplina.estudantes = Array(estudante);

    const res = await disciplinaRepository.create(disciplina);

    return res;
  }
}
