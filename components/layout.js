import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const Main = styled.main`
  padding: 0 1.5rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
