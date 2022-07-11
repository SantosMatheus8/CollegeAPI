import { AppDataSource } from "../data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados CONECTADO!");
  })
  .catch((err) => {
    console.error("ERRO ao conectar no banco!", err);
  });
