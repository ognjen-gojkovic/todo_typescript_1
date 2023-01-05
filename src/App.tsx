import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import FocusPage from "./pages/focusPage/FocusPage";
import ListPage from "./pages/listPage/ListPage";
import { Task, rootState } from "./types/Types";
import { setFocusedTask } from "./redux/reducers/reducer.todos";
import { GlobalStyles } from "./utils/GlobalStyles";
import styled from "styled-components";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: rootState) => state);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state, dispatch]);

  const shuffleTasks = (tasks: Task[]) => {
    let filteredTasks = tasks.filter((task) => !task.isComplete);
    let index = Math.abs(Math.floor(Math.random() * filteredTasks.length));
    dispatch(setFocusedTask(filteredTasks[index]));
  };

  return (
    <AppStyled>
      <GlobalStyles />
      <nav>
        <NavLink to="/">List</NavLink>
        <NavLink to="/focus">Focus</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route
          path="/focus"
          element={<FocusPage shuffleTasks={shuffleTasks} />}
        />
      </Routes>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #333;

  nav {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbce0f;

    a {
      text-decoration: none;
      border: 1px solid #dbce0f;
      padding: 5px 15px;
      transition: all 0.4s ease-in-out;
      color: #dbce0f;

      &:nth-of-type(1) {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }

      &:nth-of-type(2) {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }

      &:hover {
        transition: all 0.4s ease-in-out;
        transform: scaleY(1.1);
        background-color: #dbce0f;
        color: #333;
      }
    }
  }
`;

export default App;
