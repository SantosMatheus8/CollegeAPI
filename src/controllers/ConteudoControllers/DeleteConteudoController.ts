import { Request, Response } from "express";
import { DeleteConteudoService } from "../../services/ConteudoServices/DeleteConteudoService";

export class DeleteConteudoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = Number(request.params.id);

    const servive = new DeleteConteudoService();

    const res = await servive.execute({ id });

    if (res instanceof Error) {
      return response.status(400).json(res.message);
    }
    return response.status(200).json(res);
  }
}
