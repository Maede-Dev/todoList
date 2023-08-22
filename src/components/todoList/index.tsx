import React, { useContext } from "react";
import s from "./style.module.scss";
import { TodoContext } from "../../context";
import TodoItem from "../todoItem";

type Props = {};

const TodoList = (props: Props) => {
  const { todoList, setTodoList } = useContext(TodoContext);

  return (
    <div className={s.container}>
      {todoList.map((item, index) => (
        <TodoItem key={`${item.id}-${index}`} item={item} index={index} />
      ))}
    </div>
  );
};

export default TodoList;
