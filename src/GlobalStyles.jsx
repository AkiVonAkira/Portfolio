import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: dark;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --primary: #bc4123;
    --secondary: #2b3452;
    --accent: #0086a5;
    --bShadow: rgba(0, 0, 0, 0.2);
    --bShadow2: rgba(0, 0, 0, 0.19);
    --bShadow3: rgba(0, 0, 0, 0.45);
    --cyan: #5f9ea0;
    --cyan2: #5f9ea0a6;
    --red: #ff6347;
    --red2: #ff634740;

    /* font-family: 'Caveat', cursive;
    font-family: 'Dancing Script', cursive;
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-family: 'Quicksand', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Mono', monospace; */

  }

  body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  margin: 0;
  background: #0f0f0f;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
    transition: 0.2s;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  p {
    margin: 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    font-size: 1em;
    color: #fff;
    border: none;
    padding: 1em 2em;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #c20d0d;
      box-shadow: 0 10px 20px -15px black;
    }
}
`;

export default GlobalStyles;
