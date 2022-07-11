import { Request, Response } from "express";
import { GetAllConteudoService } from "../../services/ConteudoServices/GetAllConteudoService";

export class GetAllConteudoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllConteudoService();

    const conteudos = await service.execute();

    if (conteudos instanceof Error) {
      return response.status(400).json(conteudos.message);
    }
    return response.status(200).json(conteudos);
  }
}
