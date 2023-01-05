import { createGlobalStyle, css } from "styled-components";

const ResetCSS = css`
  // variables
  :root {
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const BaseStyle = createGlobalStyle`
${ResetCSS}`;

export const GlobalStyles = () => <BaseStyle />;
