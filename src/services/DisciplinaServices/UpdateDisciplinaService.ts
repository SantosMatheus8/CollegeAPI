import { AppDataSource } from "../../data-source";
import { Disciplina } from "../../entities/disciplina";
import Estudante from "../../entities/estudante";

type IUpdateDisciplinaDTO = {
  id: number;
  nome?: string;
  cargaHoraria?: number;
  estudantes?: Estudante[];
};

export class UpdateDisciplinaService {
  async execute({
    id,
    nome,
    cargaHoraria,
    estudantes,
  }: IUpdateDisciplinaDTO): Promise<Disciplina | Error> {
    const repo = AppDataSource.getRepository(Disciplina);

    const disciplina = await repo.findOne({ where: { id } });

    if (!disciplina) {
      return new Error("Disciplina informada não existe");
    }

    disciplina.nome = nome ? nome : disciplina.nome;
    disciplina.cargaHoraria = cargaHoraria
      ? cargaHoraria
      : disciplina.cargaHoraria;
    disciplina.estudantes = estudantes ? estudantes : disciplina.estudantes;

    await repo.save(disciplina);

    return disciplina;
  }
}
