import Estudante from "../../entities/estudante";
import EstudanteRepository from "../../repositories/EstudanteRepository";

type GetEstudanteByIdDTO = {
  id: number;
};

export class GetEstudanteByIdService {
  async execute({ id }: GetEstudanteByIdDTO): Promise<Estudante | Error> {
    const estudanteRepository = new EstudanteRepository();
    const estudante = await estudanteRepository.findById(id);

    if (!estudante) {
      return new Error("Estudante informado não existe");
    }

    return estudante;
  }
}
