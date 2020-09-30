import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todo } from '../redux/TodoAction';



function TodoForm({sendTodo, todos}) {
    const [text, setText] = useState("");
    
    // const handleClick = (sendTodo) => {
    //     props.todo()
    // }

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => sendTodo(text)}>Post</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendTodo: (text) => dispatch(todo(text)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)