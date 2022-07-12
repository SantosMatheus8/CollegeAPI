import { Router } from "express";
import { CreateDisciplinaController } from "../controllers/DisciplinaControllers/CreateDisciplinaController";
import { DeleteDisciplinaController } from "../controllers/DisciplinaControllers/DeleteDisciplinaController";
import { GetAllDisciplinasController } from "../controllers/DisciplinaControllers/GetAllDisciplinasController";
import { GetDisciplinaByIdController } from "../controllers/DisciplinaControllers/GetDisciplinaByIdController";
import { UpdateDisciplinaController } from "../controllers/DisciplinaControllers/UpdateDisciplinaController";
import { CreateEstudantesDisciplinasController } from "../controllers/EstudantesDisciplinasControllers/CreateEstudantesDisciplinasController";

const disciplinaRouter = Router();

disciplinaRouter.post("/", new CreateDisciplinaController().handle);
disciplinaRouter.get("/", new GetAllDisciplinasController().handle);
disciplinaRouter.get("/:id", new GetDisciplinaByIdController().handle);
disciplinaRouter.put("/:id", new UpdateDisciplinaController().handle);
disciplinaRouter.delete("/:id", new DeleteDisciplinaController().handle);

disciplinaRouter.post(
  "/estudantes/:id",
  new CreateEstudantesDisciplinasController().handle
);
export default disciplinaRouter;
