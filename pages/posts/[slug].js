import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Date from "../../lib/dateformat";
import Layout from "../../components/layout";

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

export default function SinglePost({ data }) {
  const title = data[0].title.rendered;

  function createMarkup(string) {
    return { __html: string };
  }

  let img = "";

  if (data[0]._embedded && data[0]._embedded["wp:featuredmedia"]) {
    img = `https://gammalochhorde.gg${data[0]._embedded["wp:featuredmedia"][0].source_url}`;
  }

  const width = img
    ? data[0]._embedded["wp:featuredmedia"][0].media_details.width
    : null;
  const height = img
    ? data[0]._embedded["wp:featuredmedia"][0].media_details.height
    : null;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Content>
        <article>
          <h1>{title}</h1>
          <small>
            <Date dateString={data[0].date} />
          </small>
          {img && (
            <Image
              quality={70}
              src={img}
              layout="responsive"
              width={width}
              height={height}
            />
          )}
          <div
            dangerouslySetInnerHTML={createMarkup(data[0].content.rendered)}
          />
        </article>
      </Content>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Fetch data from external API
  const res = await fetch(`https://gammalochhorde.gg/wp-json/wp/v2/posts`);

  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch data from external API
  const res = await fetch(
    `https://gammalochhorde.gg/wp-json/wp/v2/posts?_embed&slug=${params.slug}`
  );

  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
