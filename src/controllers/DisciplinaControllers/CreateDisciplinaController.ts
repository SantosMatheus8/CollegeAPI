import { Request, Response } from "express";
import { CreateDisciplinaService } from "../../services/DisciplinaServices/CreateDisciplinaService";

export class CreateDisciplinaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, cargaHoraria, estudantes } = request.body;

    const servive = new CreateDisciplinaService();

    const res = await servive.execute({ nome, cargaHoraria, estudantes });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
