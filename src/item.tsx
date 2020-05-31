
import * as React from 'react'
import { TodoItemInterface } from './interfaces'
const Item = (props: TodoItemInterface) => {
  return (
    <div className='todo-item'>
      <div className="">
          {props.todo.isCompleted ? (
          
         <li className="completed"
         onClick={() => props.handleTodoComplete(props.todo.id)}>{props.todo.text}</li>
        ) : (
          <li className="completed-none"
          onClick={() => props.handleTodoComplete(props.todo.id)}>{props.todo.text}</li>
        )}
       
      </div>

    </div>
  )
}

export default Item
