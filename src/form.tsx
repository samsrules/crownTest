
import * as React from 'react'
import shortid from 'shortid'

import {TodoInterface, TodoFormInterface} from './interfaces'

const Form = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [formState, setFormState] = React.useState('')
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value)
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false
      }
      props.handleTodoCreate(newTodo)

      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  
  

  

  return (
    <div>
      Name : <input
        ref={inputRef}
        type="text"
        placeholder='Add new'
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      /> 
      <input type="submit" onClick={event =>  props.handleTodoCreate({
        id: shortid.generate(),
        text: formState,
        isCompleted: false
      })
      }/>
    </div>
  )
}

export default Form
