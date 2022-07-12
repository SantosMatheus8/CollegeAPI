import { Request, Response } from "express";
import { CreateConteudoService } from "../../services/ConteudoServices/CreateConteudoService";

export class CreateConteudoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { descricao, linkConteudo, disciplinaId } = request.body;

    const servive = new CreateConteudoService();

    const res = await servive.execute({
      descricao,
      linkConteudo,
      disciplinaId,
    });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
