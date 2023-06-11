import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth !important;

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  .skills{
    align-items: center;
    bottom: 0;
    color: #767676;
    display: flex;
    font-size: 1.7rem;
    gap: 2.5rem;
  }

  .skills ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .skills ul li {
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,.09);
    cursor: pointer;
    display: flex;
    height: 6.5rem;
    justify-content: center;
    width: 6.5rem;
  }
  .skills ul li img {
    height: 3.4rem;
    width: 3.4rem;
  }
  .skillscontainer {
    display:flex;
    justify-content: center
  }

`;

export default GlobalStyles;
