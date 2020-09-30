import React from "react";
import { Provider } from "react-redux";
import TodoForm from "./components/TodoForm";
import store from "./redux/store";

function App() {
    

    return (
        <div className="App">
            <Provider store={store}>
                <TodoForm/>
            </Provider>
        </div>
    )
}


export default App
