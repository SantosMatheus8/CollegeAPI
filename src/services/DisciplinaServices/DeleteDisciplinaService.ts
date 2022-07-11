import { AppDataSource } from "../../data-source";
import { Disciplina } from "../../entities/disciplina";

type DeleteDisciplinaDTO = {
  id: number;
};

export class DeleteDisciplinaService {
  async execute({ id }: DeleteDisciplinaDTO): Promise<Disciplina | Error> {
    const repo = AppDataSource.getRepository(Disciplina);

    const disciplina = await repo.findOne({ where: { id } });

    if (!disciplina) {
      return new Error("Disciplina informada não existe");
    }

    await repo.remove(disciplina);

    return disciplina;
  }
}
