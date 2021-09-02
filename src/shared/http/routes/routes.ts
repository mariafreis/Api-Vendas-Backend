// importa a classe Router da dependencia express
import { Router } from "express";
import productRouter from "../../../modules/products/routes/routes";

//Cria um objeto da classe Router

let routes = Router();

routes.use('/products', productRouter)
// rota GET padrão /
//Request representa a requisição e response a resposta
routes.get("/", (request, response) => {
  //retorna uma mensagem no formato JSON
  return response.json({
    message: "Funcionou meu primeiro exemplo",

  });

});

//exporta o objeto para uso em outro arquivo
export default routes;