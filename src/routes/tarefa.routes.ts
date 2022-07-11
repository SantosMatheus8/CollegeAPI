import { Router } from "express";
import { CreateTarefaController } from "../controllers/TarefaControllers/CreateTarefaController";
import { DeleteTarefaController } from "../controllers/TarefaControllers/DeleteTarefaController";
import { GetAllTarefasController } from "../controllers/TarefaControllers/GetAllTarefasController";
import { GetTarefaByIdController } from "../controllers/TarefaControllers/GetTarefaByIdController";
import { UpdateTarefaController } from "../controllers/TarefaControllers/UpdateTarefaController";

const tarefaRouter = Router();

tarefaRouter.post("/", new CreateTarefaController().handle);
tarefaRouter.get("/", new GetAllTarefasController().handle);
tarefaRouter.get("/:id", new GetTarefaByIdController().handle);
tarefaRouter.put("/:id", new UpdateTarefaController().handle);
tarefaRouter.delete("/:id", new DeleteTarefaController().handle);

export default tarefaRouter;
