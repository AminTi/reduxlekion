import { createStore } from "redux"
import TodosReducer from "./TodosReducer"

const store = createStore(TodosReducer)

export default store
