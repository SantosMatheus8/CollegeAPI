import { Request, Response } from "express";
import { GetAllTarefasService } from "../../services/TarefaServices/GetAllTarefasService";

export class GetAllTarefasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllTarefasService();

    const tarefas = await service.execute();

    if (tarefas instanceof Error) {
      return response.status(400).json(tarefas.message);
    }
    return response.status(200).json(tarefas);
  }
}
