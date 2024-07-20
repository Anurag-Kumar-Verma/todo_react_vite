import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {
    const { todos } = props
  return (
    <div className='main'>
        {todos.map((item, index) => {
            return (
                <TodoCard {...props} key={index} itemIndex={index}>
                    <p>{item}</p>
                </TodoCard>
            );
        })}
    </div>
  )
}
