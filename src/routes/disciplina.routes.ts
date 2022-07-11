import { Router } from "express";
import { CreateDisciplinaController } from "../controllers/DisciplinaControllers/CreateDisciplinaController";
import { DeleteDisciplinaController } from "../controllers/DisciplinaControllers/DeleteDisciplinaController";
import { GetAllDisciplinasController } from "../controllers/DisciplinaControllers/GetAllDisciplinasController";
import { GetDisciplinaByIdController } from "../controllers/DisciplinaControllers/GetDisciplinaByIdController";
import { UpdateDisciplinaController } from "../controllers/DisciplinaControllers/UpdateDisciplinaController";

const routes = Router();

routes.post("/class", new CreateDisciplinaController().handle);
routes.get("/class", new GetAllDisciplinasController().handle);
routes.get("/class/:id", new GetDisciplinaByIdController().handle);
routes.put("/class/:id", new UpdateDisciplinaController().handle);
routes.delete("/class/:id", new DeleteDisciplinaController().handle);

export default routes;
