import React from 'react'

export default function TodoCard(props) {
    const { children, itemIndex, removeTodo, handleEditItem } = props;
  return (
    <div className='todoItem'>
        {children}
        <div className="actionsContainer">
            <button onClick={() => {handleEditItem(itemIndex)}}>
                <i className="fa fa-edit"></i>
            </button>
            <button onClick={() => removeTodo(itemIndex)}>
                <i className="fa fa-trash"></i>
            </button>
        </div>
    </div>
  )
}
