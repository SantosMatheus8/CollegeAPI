import { Request, Response } from "express";
import { GetAllDisciplinasService } from "../../services/DisciplinaServices/GetAllDisciplinasService";

export class GetAllDisciplinasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllDisciplinasService();

    const classes = await service.execute();

    if (classes instanceof Error) {
      return response.status(400).json(classes.message);
    }
    return response.status(200).json(classes);
  }
}
