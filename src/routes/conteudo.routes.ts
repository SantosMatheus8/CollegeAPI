import { Router } from "express";
import { CreateConteudoController } from "../controllers/ConteudoControllers/CreateConteudoController";
import { DeleteConteudoController } from "../controllers/ConteudoControllers/DeleteConteudoController";
import { GetAllConteudoController } from "../controllers/ConteudoControllers/GetAllConteudoController";
import { GetConteudoByIdController } from "../controllers/ConteudoControllers/GetConteudoByIdController";
import { UpdateConteudoController } from "../controllers/ConteudoControllers/UpdateConteudoController";

const conteudoRouter = Router();

conteudoRouter.post("/", new CreateConteudoController().handle);
conteudoRouter.get("/", new GetAllConteudoController().handle);
conteudoRouter.get("/:id", new GetConteudoByIdController().handle);
conteudoRouter.put("/:id", new UpdateConteudoController().handle);
conteudoRouter.delete("/:id", new DeleteConteudoController().handle);

export default conteudoRouter;
