import { AppDataSource } from "../../data-source";
import Estudante from "../../entities/estudante";

type GetEstudanteByIdDTO = {
  id: number;
};

export class GetEstudanteByIdService {
  async execute({ id }: GetEstudanteByIdDTO): Promise<Estudante | Error> {
    const repo = AppDataSource.getRepository(Estudante);

    const estudante = await repo.findOne({ where: { id } });

    if (!estudante) {
      return new Error("Estudante informado não existe");
    }

    return estudante;
  }
}
