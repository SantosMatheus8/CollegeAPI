import * as express from "express";
import routes from "./routes";
import "./database";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server rodando na porta 3000"));
