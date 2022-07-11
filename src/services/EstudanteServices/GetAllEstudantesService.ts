import Estudante from "../../entities/estudante";
import EstudanteRepository from "../../repositories/EstudanteRepository";

export class GetAllEstudantesService {
  async execute(): Promise<Estudante[]> {
    const estudanteRepository = new EstudanteRepository();
    const estudantes = await estudanteRepository.list();

    return estudantes;
  }
}
