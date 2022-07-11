import { Router } from "express";
import conteudoRouter from "./conteudo.routes";
import disciplinaRouter from "./disciplina.routes";
import estudanteRouter from "./estudante.routes";
import tarefaRouter from "./tarefa.routes";

const routes = Router();

routes.use("/disciplina", disciplinaRouter);
routes.use("/conteudo", conteudoRouter);
routes.use("/estudante", estudanteRouter);
routes.use("/tarefa", tarefaRouter);

export default routes;
