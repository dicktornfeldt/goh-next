/**
 * These are styles that are injected globally throughout the app
 */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: OpenSans;
    src: url("/fonts/OpenSans-Regular.woff2") format("woff2");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: RussoOne;
    src: url("/fonts/russo_one-webfont.woff") format("woff");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  html,
  body {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    font-family: OpenSans;
    overflow-y: auto;
    box-sizing: border-box;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    text-rendering: optimizeLegibility;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.5;
    margin: 0;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};
    background-image: url(${"/images/bg-light.jpg"});
    background-repeat: repeat-y;
    background-position: center;
    background-size: 100% auto;
  }

  a {
    text-decoration: none;
    background-color: transparent;
    transition: all .15s ease;
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
    &:visited,
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    &:after {
      display: block;
      clear: both;
      content: '';
    }
    li {
      margin: 0;
      padding: 0;
    }
  }
`;
