import { Request, Response } from "express";
import { UpdateEstudanteService } from "../../services/EstudanteServices/UpdateEstudanteService";

export class UpdateEstudanteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    const { nome, email, senha, dataNascimento } = request.body;

    const servive = new UpdateEstudanteService();

    const res = await servive.execute({
      id,
      nome,
      email,
      senha,
      dataNascimento,
    });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
