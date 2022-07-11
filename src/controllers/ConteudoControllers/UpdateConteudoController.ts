import { Request, Response } from "express";
import { UpdateConteudoService } from "../../services/ConteudoServices/UpdateConteudoService";

export class UpdateConteudoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);
    const { descricao, linkConteudo } = request.body;

    const servive = new UpdateConteudoService();

    const res = await servive.execute({ id, descricao, linkConteudo });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
