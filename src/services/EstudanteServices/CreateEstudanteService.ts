import { hash } from "bcryptjs";
import Estudante from "../../entities/estudante";
import EstudanteRepository from "../../repositories/EstudanteRepository";

type CreateEstudanteDTO = {
  nome: string;
  senha: string;
  email: string;
  dataNascimento: Date;
};

export class CreateEstudanteService {
  async execute({
    nome,
    senha,
    email,
    dataNascimento,
  }: CreateEstudanteDTO): Promise<Estudante> {
    const estudanteRepository = new EstudanteRepository();

    const senhaHash = await hash(senha, 8);

    const res = await estudanteRepository.create({
      nome,
      senha: senhaHash,
      email,
      dataNascimento,
    });

    return res;
  }
}
