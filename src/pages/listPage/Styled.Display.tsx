import styled from "styled-components";

export const DisplayStyled = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btn-clr {
    background: transparent;
    border-radius: 20px;
    padding: 10px 30px;
    color: #dbce0f;
    font-size: 1.1rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #555;

    &:hover {
      transform: scale(1.04);
      background-color: #dbce0f;
      color: #555;
    }
  }

  ul {
    width: 60%;

    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      list-style: none;
      font-size: 1.4rem;
      color: #dbce0f;
      div {
        input {
          width: 20px;
          height: 20px;
          margin-left: 200px;
          margin-right: 30px;
          margin-top: 5px;
        }
      }
      button {
        margin-right: 100px;
        background: transparent;
        font-size: 1.2rem;
        color: tomato;
        border: none;
        outline: none;
        transition: all 0.3s ease-in-out;

        &:hover {
          transform: scaleY(1.1);
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
`;
