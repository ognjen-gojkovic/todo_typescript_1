import React from "react";
import Display from "./Display";
import Form from "./Form";
import { ListPageStyled } from "./Styled.ListPage";

type Props = {};

const ListPage: React.FC<Props> = () => {
  return (
    <ListPageStyled>
      <Form />
      <Display />
    </ListPageStyled>
  );
};

export default ListPage;
