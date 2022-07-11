import { AppDataSource } from "../../data-source";
import Estudante from "../../entities/estudante";

type UpdateEstudanteDTO = {
  id: number;
  nome: string;
  email: string;
  senha: string;
  dataNascimento: Date;
};

export class UpdateEstudanteService {
  async execute({
    id,
    nome,
    email,
    senha,
    dataNascimento,
  }: UpdateEstudanteDTO): Promise<Estudante | Error> {
    const repo = AppDataSource.getRepository(Estudante);

    const estudante = await repo.findOne({ where: { id } });

    if (!estudante) {
      return new Error("Estudante informado não existe");
    }

    estudante.nome = nome ? nome : estudante.nome;
    estudante.email = email ? email : estudante.email;
    estudante.senha = senha ? senha : estudante.senha;
    estudante.dataNascimento = dataNascimento
      ? dataNascimento
      : estudante.dataNascimento;

    await repo.save(estudante);

    return estudante;
  }
}
