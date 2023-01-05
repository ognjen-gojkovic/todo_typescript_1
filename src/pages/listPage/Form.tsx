import React from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/reducer.todos";
import { FormStyled } from "./Styled.Form";

type Props = {};

const Form: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [newTaskLabel, setNewTaskLabel] = React.useState("");

  const handleNewTaskLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value);
  };

  const handleTask = (
    e: React.KeyboardEvent<HTMLInputElement>,
    todoText: string
  ) => {
    if (e.key === "Enter") {
      if (todoText !== "") {
        let newTodo = {
          id: nanoid(),
          label: todoText,
          isComplete: false,
        };
        dispatch(addTodo(newTodo));
        setNewTaskLabel("");
      }
    }
  };

  return (
    <FormStyled>
      <input
        type="text"
        value={newTaskLabel}
        onKeyDown={(e) => handleTask(e, newTaskLabel)}
        onChange={handleNewTaskLabel}
      />
    </FormStyled>
  );
};

export default Form;
