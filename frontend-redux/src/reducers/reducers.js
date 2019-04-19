import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

// ! aqui vao estar todosos reducers combinados.
const rootReducers = combineReducers({
  // * estado da aplicação
  todo: todoReducer
});

export default rootReducers;
