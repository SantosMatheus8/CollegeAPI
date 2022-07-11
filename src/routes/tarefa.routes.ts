import { Router } from "express";
import { CreateTarefaController } from "../controllers/TarefaControllers/CreateTarefaController";
import { DeleteTarefaController } from "../controllers/TarefaControllers/DeleteTarefaController";
import { GetAllTarefasController } from "../controllers/TarefaControllers/GetAllTarefasController";
import { GetTarefaByIdController } from "../controllers/TarefaControllers/GetTarefaByIdController";
import { UpdateTarefaController } from "../controllers/TarefaControllers/UpdateTarefaController";

const routes = Router();

routes.post("/tarefa", new CreateTarefaController().handle);
routes.get("/tarefa", new GetAllTarefasController().handle);
routes.get("/tarefa/:id", new GetTarefaByIdController().handle);
routes.put("/tarefa/:id", new UpdateTarefaController().handle);
routes.delete("/tarefa/:id", new DeleteTarefaController().handle);
