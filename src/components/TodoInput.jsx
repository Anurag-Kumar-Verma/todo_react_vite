import { useState } from "react";

export default function Todoinput(props) {
    const { handleTodo, todoValue, updateValue } = props;
    return <header>
        <input type="text" placeholder="Enter todo.." value={todoValue} onChange={(e) => {updateValue(e.target.value)}} />
        <button disabled={todoValue.trim() == ''} onClick={(e) => {handleTodo(todoValue); updateValue('')}}>Add</button>
    </header>
}