import React, { useContext, useId, useState } from "react";
import s from "./style.module.scss";
import { TodoContext } from "../../context";
import { Categories, Statuses } from "../../types/todo";

type Props = {};

const InputBox = (props: Props) => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const id = useId();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoList([
      ...todoList,
      {
        title: value,
        id: id,
        category: Categories.Personal,
        status: Statuses.Todo,
      },
    ]);
    setValue("");
  };

  return (
    <div className={s.container}>
      <form name="todo" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="What do you need to do?"
          className={s.inputBox}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={s.btn} type="submit" disabled={value === ""}>
          submit
        </button>
      </form>
    </div>
  );
};

export default InputBox;
