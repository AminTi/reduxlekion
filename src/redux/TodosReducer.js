import { TODOS } from "./TodoType"

const initialState = {
    todos: [],
}

const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODOS:
            return {
                ...state,
                todos: action.text,
            }
        default:
            return state
    }
}

export default TodosReducer
