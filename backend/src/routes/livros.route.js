
import { Router } from "express";
import livrosController from "../controllers/livros.controller.js";
const livrosRouter = Router();

livrosRouter.post("/registrarLivro", livrosController.registrarLivro);
livrosRouter.get("/todosLivros", livrosController.todosLivros);
livrosRouter.get("/livrosLidos", livrosController.livrosLidos);
livrosRouter.get("/livrosNFinalizados", livrosController.livrosNFinalizados);
livrosRouter.get("/dataAnoMes", livrosController.dataAnoMes);

// //MES
// livrosRouter.get("/allMesAtual/:mesAtual/:anoAtual", livrosController.allMesAtual);

// //ANO
// livrosRouter.get("/allAnoAtual/:dataAtual", livrosController.allAnoAtual);
// livrosRouter.get("/anoAtualLidos/:anoAtual", livrosController.anoAtualLidos);
// livrosRouter.get("/anoAtualNFinalizado/:anoAtual", livrosController.anoAtualNFinalizado);

// livrosRouter .post("/register", encontrosController.createEncontro);
// livrosRouter .get("/encontrosCadastrados/:id", encontrosController.getAllEncontrosCadastrados);
// livrosRouter .put("/updateEncontro/:id", encontrosController.updateEncontroById);
// livrosRouter .delete("/deleteEncontro/:id", encontrosController.deleteEncontroById);

export default livrosRouter;