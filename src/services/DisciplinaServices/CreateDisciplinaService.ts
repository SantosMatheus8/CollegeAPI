import { Disciplina } from "../../entities/disciplina";
import Estudante from "../../entities/estudante";
import DisciplinaRepository from "../../repositories/DisciplinaRepository";

type CreateDisciplinaDTO = {
  nome: string;
  cargaHoraria: number;
  estudantes: Estudante[];
};

export class CreateDisciplinaService {
  async execute({
    nome,
    cargaHoraria,
    estudantes,
  }: CreateDisciplinaDTO): Promise<Disciplina> {
    const disciplinaRepository = new DisciplinaRepository();

    return await disciplinaRepository.create({
      nome,
      cargaHoraria,
      estudantes,
    });
  }
}
