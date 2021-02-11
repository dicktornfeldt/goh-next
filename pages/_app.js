import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../theme/globalStyle";
import { theme } from "../theme/theme";

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 15rem;
  min-height: 100%;
  height: 100%;
`;

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Head>
        <title>Gammal och Horde</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Wrapper>
  );
}
