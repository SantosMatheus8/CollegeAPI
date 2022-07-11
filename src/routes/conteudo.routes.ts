import { Router } from "express";
import { CreateConteudoController } from "../controllers/ConteudoControllers/CreateConteudoController";
import { DeleteConteudoController } from "../controllers/ConteudoControllers/DeleteConteudoController";
import { GetAllConteudoController } from "../controllers/ConteudoControllers/GetAllConteudoController";
import { GetConteudoByIdController } from "../controllers/ConteudoControllers/GetConteudoByIdController";
import { UpdateConteudoController } from "../controllers/ConteudoControllers/UpdateConteudoController";

const routes = Router();

routes.post("/conteudo", new CreateConteudoController().handle);
routes.get("/conteudo", new GetAllConteudoController().handle);
routes.get("/conteudo/:id", new GetConteudoByIdController().handle);
routes.put("/conteudo/:id", new UpdateConteudoController().handle);
routes.delete("/conteudo/:id", new DeleteConteudoController().handle);
