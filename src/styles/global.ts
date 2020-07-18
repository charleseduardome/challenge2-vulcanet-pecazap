import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../assets/background.svg';

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body {
    height: 100vh;
    background: #3e9296 url(${backgroundImg}) no-repeat;
    background-position: left 0px bottom 80px;
    background-size: 25%;
    -webkit-font-smoothing: antialiased;

  }
  body, input, button {
    font-family: 'Lato', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
