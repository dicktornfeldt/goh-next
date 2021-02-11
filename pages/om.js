import Head from "next/head";

import styled from "styled-components";

import Layout from "../components/layout";

const Content = styled.section`
  max-width: 80rem;
  margin: 11rem auto 9.5rem;
  @media (min-width: 768px) {
    margin: 9.5rem auto;
  }
  article {
    h1 {
      margin: 0 0 0.2rem;
      font-family: RussoOne;
      font-size: 3rem;
      line-height: 3.5rem;
      text-align: center;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary};
      @media (min-width: 768px) {
        font-size: 3.5rem;
        line-height: 4rem;
      }
    }
    small {
      font-size: 80%;
      font-weight: 400;
      font-family: RussoOne;
      display: block;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      text-align: center;
      text-transform: uppercase;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.4);
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default function Om() {
  return (
    <Layout>
      <Head>
        <title>DETTA ÄR GAMMEL OCH HORDE</title>
      </Head>
      <Content>
        <article>
          <h1>DETTA ÄR GAMMEL OCH HORDE</h1>
          <section class="Page__wrapper">
            <p>
              Gammal och Horde är en helsvenska guild som startades med lågt
              ställda förväntningar, där vi tänkte att vi får tvinga med oss
              närmast sörjande så att vi har några att spela med. Men allt
              eftersom så rullade det på och våra vänner bjöd in sina vänner
              osv. Det rullade på och i början av Juni så var 62 medlemmar.
            </p>
            <p>
              Detta firades med en Meet up i Jönköping, med lite öl i 2 dagar.
              Vi träffade många likasinnade dessa två dagar och vad pratar man
              när man dricker öl? WoW Classic så klart. Så efter den helgen så
              var vi 80+ medlemmar. I skrivande stund så är vi nästan 150
              medlemmar, de flesta av oss är någonstans mellan 25-35, vi har
              även äldre förmågor med massor av rutin, och unga talanger som
              vill visa framfötterna.
            </p>
            <p>
              Först av allt så vill vi ha ett levande community där våra
              medlemmarna loggar in för att ha kul, och för att snacka skit med
              sina vänner. Så att det inte bara loggas in vid raider. Gammal och
              Horde är för personer med en passion för datorspelande men kanske
              inte har möjligheten att spela 8 timmar i sträck, som på den gamla
              goda tiden. Utan nu är det familj och barn, arbete, träning och
              andra åtagande som har prio, och att folk har full förståelse för
              detta.
            </p>
            <p>
              Vi har haft en guildträff på Kappabar I Jönköping, och nästa gång
              blir det på GGBar I Göteborg. För att ta det till nästa nivå
              gällande Hype/nördighet så har vi designat guild T-shirts som en
              del av oss kommer att bära. Tanken är att vi ska försöka anordna
              1-2 “meet ups” /år.
            </p>

            <p>
              Vi har som mål att vara casual dvs, 2 raider i veckan och att man
              kan medverka på minst 1 i veckan. Men när vi raidar så kommer det
              vara seriöst och organiserat så att vi kan klara av så mycket som
              möjligt, på så kort tid som möjligt.
            </p>
          </section>
        </article>
      </Content>
    </Layout>
  );
}
