// Import dependencies
import React,{useState, useEffect} from 'react';
import { render } from 'react-dom'


import Form from './form';
import List from './list';
import { TodoInterface } from './interfaces';

import './../src/App.css'

const ListApp = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])
  function handleTodoCreate(todo: TodoInterface) { 
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
  }

  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) { 
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value
    setTodos(newTodosState)
  }

  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    setTodos(newTodosState)
  }

 

  return (
    <div >
      <Form
        todos={todos}
        handleTodoCreate={handleTodoCreate}
      />

      <List
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoComplete={handleTodoComplete}
       
      />
    </div>
  )
}


const rootElement = document.getElementById('root')
render(<ListApp />, rootElement)
