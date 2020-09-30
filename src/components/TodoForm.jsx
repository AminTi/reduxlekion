import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todo } from '../redux/TodoAction';


const TodoForm = (props) => {
    const [text, setText] = useState("");

    console.log(props)

    const handleClick = () => {
        console.log(props)
    }

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleClick}>Post</button>
            <div>{}</div>
        </div>
    )
}

const mapStateToProps = () => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = () => {
    return {
        sentTodo: () => dispatch(todo())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)