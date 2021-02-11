import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/layout";
import Posts from "../components/Posts";

const Hero = styled.section`
  margin: 12rem auto 5rem;
  position: relative;

  @media (min-width: 768px) {
    margin: auto;
    height: 100%;
    height: 100vh;
    max-width: 106rem;
  }

  aside {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;
    &:after {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 0;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-aspect-ratio: 16/9) {
    video {
      height: 300%;
      top: -100%;
    }
  }

  @media (max-aspect-ratio: 16/9) {
    video {
      width: 300%;
      left: -100%;
    }
  }

  @media (max-width: 767px) {
    aside {
      background: url(${"/images/fallback.png"}) left center / cover no-repeat;
    }
    video {
      display: none;
    }
  }

  article {
    @media (min-width: 768px) {
      max-width: 53rem;
      float: right;
      position: relative;
      top: 50%;
      transform: translateY(-60%);
    }
    h1 {
      font-family: RussoOne;
      font-size: 2.9rem;
      line-height: 3.9rem;
      margin: 0 0 1rem;
      text-align: left;
      text-transform: uppercase;
      color: #ffa71b;
      font-weight: normal;
      @media (min-width: 768px) {
        font-size: 4rem;
        line-height: 5rem;
      }
    }
    p {
      font-size: 115%;
      margin: 0 0 5rem;
    }
    a {
      font-family: RussoOne;
      font-size: 1.4rem;
      padding: 1.3rem 2rem;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      text-transform: uppercase;
      color: #ffa71b;
      border: 1px solid #ffa71b;
      background: rgba(26, 26, 26, 0.6);
      &:hover {
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.primary};
        text-decoration: none;
      }
    }
  }
`;

export default function Home({ posts }) {
  return (
    <Layout>
      <Hero>
        <article>
          <div>
            <h1>Vi är gamla, men fortfarande hordea!</h1>
            <p>
              15 år senare har gnistan återigen tänts. Efter kungörelsen av
              Vanillas återkomst startades en liten men varmblodig ambition att
              bygga ett kollektiv - ett hem - för Azeroths äldsta återvändare.
              Ett hem att trivas i. Ordet spred sig och kollektivet växte snabbt
              från att vara ett hem för vänner till något större. Från
              Ashenvales förtrollande skogar, till Blackrocks brinnande stäppar
              ska vi hjälpa varandra och frodas som en familj - och visa vilka
              som bestämmer i Azeroth. Vi är gamla... Och vi är hordea!
            </p>
          </div>

          <Link href="/ansokan">
            <a>Är du också horde? Skicka en guildansökan!</a>
          </Link>
        </article>

        <aside>
          <video loop muted autoPlay>
            <source src="./bg.mp4" type="video/mp4" />
          </video>
        </aside>
      </Hero>
      <Posts posts={posts} />
    </Layout>
  );
}

export const getServerSideProps = async (ctx) => {
  // Fetch data from external API
  const res = await fetch(
    `https://gammalochhorde.gg/wp-json/wp/v2/posts?_embed&per_page=10`
  );

  const data = await res.json();

  // Pass data to the page via props
  return { props: { posts: data } };
};
