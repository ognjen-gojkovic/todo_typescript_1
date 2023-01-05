import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTask,
  clearCompleted,
  deleteTodo,
  setFocusedTask,
} from "../../redux/reducers/reducer.todos";
import { rootState, Task } from "../../types/Types";
import { DisplayStyled } from "./Styled.Display";

const Display: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: rootState) => state.TodosReducer.todos);

  React.useEffect(() => {
    if (todos.length < 1) dispatch(setFocusedTask(null));
  }, [dispatch, todos.length]);

  const handleCompleteChange = (
    task: Task,
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(updateTask({ id: task.id, isComplete: e.target.checked }));
    if (e.target.checked !== true) dispatch(setFocusedTask(task));
  };

  const handleClearClick = (): void => {
    dispatch(clearCompleted());
  };

  const handleTaskDelete = (id: Pick<Task, "id">): void => {
    dispatch(deleteTodo(id));
  };

  return (
    <DisplayStyled>
      <button className="btn-clr" onClick={() => handleClearClick()}>
        Clear Completed
      </button>
      <ul>
        {todos.map((task) => {
          return (
            <li key={task.id}>
              <div>
                <input
                  type="checkbox"
                  checked={task.isComplete}
                  onChange={(e) => handleCompleteChange(task, e)}
                />
                {task.label}
              </div>

              <button onClick={() => handleTaskDelete({ id: task.id })}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </DisplayStyled>
  );
};

export default Display;
