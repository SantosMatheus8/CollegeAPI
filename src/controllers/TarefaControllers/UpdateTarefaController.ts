import { Request, Response } from "express";
import { UpdateTarefaService } from "../../services/TarefaServices/UpdateTarefaService";

export class UpdateTarefaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    const { descricao, dataEntrega, estudantes } = request.body;

    const servive = new UpdateTarefaService();

    const res = await servive.execute({
      id,
      descricao,
      dataEntrega,
      estudantes,
    });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
