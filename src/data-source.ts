import "reflect-metadata";
import { DataSource } from "typeorm";
import Conteudo from "./entities/conteudo";
import { Disciplina } from "./entities/disciplina";
import Estudante from "./entities/estudante";
import Tarefa from "./entities/tarefa";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "bancoestudos",
  synchronize: true,
  logging: false,
  entities: [Disciplina, Estudante, Conteudo, Tarefa],
  migrations: ["src/database/migrations/*"],
  subscribers: [],
});
