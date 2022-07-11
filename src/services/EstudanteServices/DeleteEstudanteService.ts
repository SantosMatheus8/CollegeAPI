import { AppDataSource } from "../../data-source";
import Estudante from "../../entities/estudante";

type DeleteEstudanteDTO = {
  id: number;
};

export class DeleteEstudanteService {
  async execute({ id }: DeleteEstudanteDTO): Promise<Estudante | Error> {
    const repo = AppDataSource.getRepository(Estudante);
    const estudante = await repo.findOne({ where: { id } });

    if (!estudante) {
      return new Error("Estudante informado não existe");
    }

    await repo.remove(estudante);

    return estudante;
  }
}
