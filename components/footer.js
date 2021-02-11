import styled from "styled-components";

const FooterStyled = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15rem;
  margin: auto;
  padding: 4rem 1.5rem 7rem 1.5rem;
  text-align: center;
  border-top: 0.2rem solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.black};
  a {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.primary};
  }
  small {
    display: block;
    margin: 1rem 0 0 0;
    color: ${(props) => props.theme.colors.white};
  }
`;

export default function Footer() {
  return (
    <FooterStyled>
      <a href="https://discord.gg/3jWv46R" target="_blank">
        Kontakta oss på Discord
      </a>
      <small>© Copyright Gammal och Horde {new Date().getFullYear()}</small>
    </FooterStyled>
  );
}
