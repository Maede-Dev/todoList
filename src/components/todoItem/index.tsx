import React, { useContext } from "react";
import { TodoContext } from "../../context";
import s from "./style.module.scss";
import { ITodo, Statuses } from "../../types/todo";

interface IProps {
  index: number;
  item: ITodo;
}

const TodoItem = (props: IProps) => {
  const { id, status, title, category } = props.item;
  const { todoList, setTodoList } = useContext(TodoContext);

  const handleDelete = (index: number) => {
    const updatedArray = todoList.filter((item, i) => index !== i);
    setTodoList(updatedArray);
  };

  const handleChecked = (index: number) => {
    for (let i in todoList) {
      if (i === `${index}`) {
        todoList[i].status = Statuses.Done;
        break;
      }
    }
  };
  return (
    <div className={s.container}>
      <div
        className={`${s.title} ${
          status === "Done" ? s.Done : status === "Todo" ? s.title : null
        }`}
      >
        {title}
      </div>
      <input
        type="checkbox"
        onChange={(e) => {
          handleChecked(props.index);
        }}
      />
      <img
        src={"/delete.png"}
        alt="delete"
        className={s.deleteIcon}
        onClick={() => handleDelete(props.index)}
      />
    </div>
  );
};

export default TodoItem;
