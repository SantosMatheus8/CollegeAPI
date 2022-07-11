import { Request, Response } from "express";
import { CreateEstudanteService } from "../../services/EstudanteServices/CreateEstudanteService";

export class CreateEstudanteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, senha, email, dataNascimento } = request.body;

    const servive = new CreateEstudanteService();

    const res = await servive.execute({ nome, senha, email, dataNascimento });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
