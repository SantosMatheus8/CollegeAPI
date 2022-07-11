import { Request, Response } from "express";
import { CreateTarefaService } from "../../services/TarefaServices/CreateTarefaService";

export class CreateTarefaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { descricao, dataEntrega, estudantes } = request.body;

    const servive = new CreateTarefaService();

    const res = await servive.execute({ descricao, dataEntrega, estudantes });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
