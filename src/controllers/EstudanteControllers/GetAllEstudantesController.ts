import { Request, Response } from "express";
import { GetAllEstudantesService } from "../../services/EstudanteServices/GetAllEstudantesService";

export class GetAllEstudantesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllEstudantesService();

    const estudantes = await service.execute();

    if (estudantes instanceof Error) {
      return response.status(400).json(estudantes.message);
    }
    return response.status(200).json(estudantes);
  }
}
