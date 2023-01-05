import styled from "styled-components";

export const FocusPageStyled = styled.div`
  width: 100%;

  .container-1,
  .container-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: calc(100vh - 80px);
    padding-top: 200px;

    div {
      font-size: 1.4rem;
      color: #dbce0f;
    }
    .btn-cmplte,
    .btn-nope {
      margin-top: 150px;
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

    .btn-nope {
      margin-top: 10px;
    }
  }

  .container-2 {
    font-size: 1.4rem;
    color: #dbce0f;
  }
`;
