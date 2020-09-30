import React, { useState } from "react"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <input />
            </Provider>
        </div>
    )
}

export default App
