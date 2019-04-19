import { combineReducers } from "redux";

// ! aqui vao estar todosos reducers combinados.
const rootReducers = combineReducers({
  // * estado da aplicação
  todo: () => ({
    description: "Ler livro",
    list: [
      {
        _id: 1,
        description: "Pagar divida do cartão",
        done: true
      },
      {
        _id: 2,
        description: "Fazer compras do mes",
        done: false
      },
      {
        _id: 2,
        description: "Arrumar guarda roupas",
        done: false
      }
    ]
  })
});

export default rootReducers;
