import { useEffect, useState } from 'react'
import './App.css'
import Todoinput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function addNew(newTodo) {
    const newList = [...todos, newTodo];
    persistData(newList);
    setTodos(newList);
  }
  function removeItem(index) {
    const newList = todos.filter((_, i) => index !== i );
    persistData(newList);
    setTodos(newList);
  }
  function editItem(index) {
    const valueTpBeEdited = todos[index];
    setTodoValue(valueTpBeEdited);
    removeItem(index);
  }

  useEffect(() => {
    if(!localStorage){return}
    let localTodos = localStorage.getItem('todos');
    if(!localTodos) return;
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos)
  }, [])
  

  return (
    <main>
      <Todoinput todoValue={todoValue} updateValue={setTodoValue} handleTodo={addNew} />
      <TodoList todos={todos} handleEditItem={editItem} removeTodo={removeItem} />
    </main>
  )
}

export default App
