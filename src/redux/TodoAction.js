import { TODOS } from "./TodoType"

export const todo = (text) => {
    return {
        type: TODOS,
        payload: text,
    }
}
