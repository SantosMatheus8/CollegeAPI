import { Request, Response } from "express";
import { UpdateDisciplinaService } from "../../services/DisciplinaServices/UpdateDisciplinaService";

export class UpdateDisciplinaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    const { nome, cargaHoraria, estudantes } = request.body;

    const servive = new UpdateDisciplinaService();

    const res = await servive.execute({ id, nome, cargaHoraria, estudantes });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
