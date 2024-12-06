import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 62.5%; // 62.5% = 10px

    @media (max-width: 1640px) {
    font-size: 50%; // 62.5% = 10px
    }

    @media (max-width: 950px) {
      font-size: 40%; // 62.5% = 10px
    }

  }
  
`;

export default Global;