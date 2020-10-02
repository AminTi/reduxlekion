import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todo } from '../redux/TodoAction';

function TodoForm() {
    const [text, setText] = useState("");
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
  console.log(todos);

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => dispatch(todo(text))}>Post</button>
        </div>
    )
}

export default TodoForm