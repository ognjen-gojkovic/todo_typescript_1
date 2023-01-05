import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Task, rootState } from "../../types/Types";
import { updateTask } from "../../redux/reducers/reducer.todos";
import { FocusPageStyled } from "./Styled.FocusPage";

type Props = {
  shuffleTasks: (tasks: Task[]) => void;
};

const FocusPage: React.FC<Props> = ({ shuffleTasks }) => {
  const dispatch = useDispatch();
  const state = useSelector((state: rootState) => state.TodosReducer);

  const handleMarkCompleted = () => {
    if (state.focusedTask)
      dispatch(updateTask({ id: state.focusedTask.id, isComplete: true }));
  };

  return (
    <FocusPageStyled>
      {state.focusedTask ? (
        <div className="container-1">
          <div>{state.focusedTask.label}</div>
          <button className="btn-cmplte" onClick={handleMarkCompleted}>
            mark complete
          </button>
          <button
            className="btn-nope"
            onClick={() => shuffleTasks(state.todos)}
          >
            nope
          </button>
        </div>
      ) : (
        <div className="container-2">No incomplete tasks.</div>
      )}
    </FocusPageStyled>
  );
};

export default FocusPage;
