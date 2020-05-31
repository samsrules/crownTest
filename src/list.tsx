import * as React from 'react'
import Item from './item'
import { TodoListInterface } from './interfaces'

const List = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
            <Item
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoComplete={props.handleTodoComplete}
            />
         
        ))}
      </ul>
    </div>
  )
}

export default List
