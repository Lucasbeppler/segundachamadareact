import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 2;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    max-width: 800px;
    margin: 0 auto;
  }
`;
