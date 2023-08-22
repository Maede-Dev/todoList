import { createContext, useState } from "react";
import { ITodo } from "../types/todo";

interface TodoContextType {
  todoList: ITodo[];
  setTodoList: any;
}

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
}
