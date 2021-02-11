import Link from "next/link";
import styled from "styled-components";

const HeaderStyled = styled.header`
  max-width: 110rem;
  height: 4rem;
  margin: auto;
  padding: 0 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
  img {
    width: 30rem;
    margin: 3rem auto 0;
    display: block;
    @media (min-width: 768px) {
      float: left;
      width: 35rem;
    }
  }
  nav {
    font-family: RussoOne;
    font-size: 1.4rem;
    margin-top: 3rem;
    padding: 0 0 2rem;
    text-transform: uppercase;

    @media (min-width: 768px) {
      float: right;
      margin-top: 4.2rem;
      padding: 0;
      border-bottom: none;
    }
    a {
      margin: 0 0.5rem;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.primary};
      @media (min-width: 768px) {
        margin: 0 0 0 2rem;
        font-size: 1.4rem;
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Link href="/">
        <a>
          <img
            src="https://gammalochhorde.gg/wp-content/themes/goh/src/images/goh.png"
            alt="Gammal och Horde logo"
          />
        </a>
      </Link>
      <nav>
        <Link href="/#news">
          <a>Nyheter</a>
        </Link>
        <Link href="/ansokan">
          <a>Ansökan</a>
        </Link>
        <Link href="/om">
          <a>Om</a>
        </Link>
      </nav>
    </HeaderStyled>
  );
}
