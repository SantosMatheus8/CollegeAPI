import { Router } from "express";
import { CreateEstudanteController } from "../controllers/EstudanteControllers/CreateEstudanteController";
import { DeleteEstudanteController } from "../controllers/EstudanteControllers/DeleteEstudanteController";
import { GetAllEstudantesController } from "../controllers/EstudanteControllers/GetAllEstudantesController";
import { GetEstudanteByIdController } from "../controllers/EstudanteControllers/GetEstudanteByIdController";
import { UpdateEstudanteController } from "../controllers/EstudanteControllers/UpdateEstudanteController";

const routes = Router();

routes.post("/estudante", new CreateEstudanteController().handle);
routes.get("/estudante", new GetAllEstudantesController().handle);
routes.get("/estudante/:id", new GetEstudanteByIdController().handle);
routes.put("/estudante/:id", new UpdateEstudanteController().handle);
routes.delete("/estudante/:id", new DeleteEstudanteController().handle);
