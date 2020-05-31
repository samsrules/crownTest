export interface TodoInterface {
  id: string;
  text: string;
  isCompleted: boolean;
}
export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}
export interface TodoListInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoComplete: (id: string) => void;
  
  
  todos: TodoInterface[];
}
export interface TodoItemInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoComplete: (id: string) => void;
  
  todo: TodoInterface;
}
