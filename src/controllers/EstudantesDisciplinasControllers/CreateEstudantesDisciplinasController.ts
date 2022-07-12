import { Request, Response } from "express";
import { CreateEstudantesDisciplinasService } from "../../services/EstudantesDisciplinasServices/CreateEstudantesDisciplinasService";

export class CreateEstudantesDisciplinasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { estudanteId } = request.body;

    const servive = new CreateEstudantesDisciplinasService();

    const res = await servive.execute({
      estudanteId,
      disciplinaId: Number(id),
    });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
