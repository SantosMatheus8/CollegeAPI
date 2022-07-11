import { Router } from "express";
import { CreateEstudanteController } from "../controllers/EstudanteControllers/CreateEstudanteController";
import { DeleteEstudanteController } from "../controllers/EstudanteControllers/DeleteEstudanteController";
import { GetAllEstudantesController } from "../controllers/EstudanteControllers/GetAllEstudantesController";
import { GetEstudanteByIdController } from "../controllers/EstudanteControllers/GetEstudanteByIdController";
import { UpdateEstudanteController } from "../controllers/EstudanteControllers/UpdateEstudanteController";

const estudanteRouter = Router();

estudanteRouter.post("/", new CreateEstudanteController().handle);
estudanteRouter.get("/", new GetAllEstudantesController().handle);
estudanteRouter.get("/:id", new GetEstudanteByIdController().handle);
estudanteRouter.put("/:id", new UpdateEstudanteController().handle);
estudanteRouter.delete("/:id", new DeleteEstudanteController().handle);

export default estudanteRouter;
