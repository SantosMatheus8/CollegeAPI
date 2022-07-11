import { Request, Response } from "express";
import { DeleteDisciplinaService } from "../../services/DisciplinaServices/DeleteDisciplinaService";

export class DeleteDisciplinaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);

    const servive = new DeleteDisciplinaService();

    const res = await servive.execute({ id });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
