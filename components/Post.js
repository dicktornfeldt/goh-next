import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Date from "../lib/dateformat";

const Article = styled.article`
  margin: 0 auto 3rem;
  padding: 0 0 1.5rem;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.4);

  @media (min-width: 768px) {
    margin: 0 2% 3rem;
    display: inline-block;
    width: 45%;
    vertical-align: top;
  }

  @media (min-width: 1024px) {
    width: 29%;
  }
  small {
    font-size: 80%;
    font-weight: 400;
    font-family: RussoOne;
    text-transform: uppercase;
  }
  h2 {
    font-family: RussoOne;
    line-height: 1.2;
    margin: 0;
    font-weight: normal;
    * {
      color: ${(props) => props.theme.colors.primary};
    }
  }
  figure {
    margin: 1rem 0;
    img {
      width: 100%;
      border: 0.2rem solid;
      border-color: ${(props) => props.theme.colors.primary};
      box-shadow: 0 0 2rem rgb(0 0 0 / 60%);
    }
  }
`;

export default function Post({ post }) {
  function createMarkup(string) {
    return { __html: string };
  }

  const img = post._embedded["wp:featuredmedia"]
    ? `https://gammalochhorde.gg${post._embedded["wp:featuredmedia"][0].source_url}`
    : null;

  const width = img
    ? post._embedded["wp:featuredmedia"][0].media_details.width
    : null;
  const height = img
    ? post._embedded["wp:featuredmedia"][0].media_details.height
    : null;

  return (
    <Article>
      <small>
        <Date dateString={post.date} />
      </small>
      <h2>
        <Link href={`/posts/${post.slug}`}>
          <a dangerouslySetInnerHTML={createMarkup(post.title.rendered)} />
        </Link>
      </h2>

      {img && (
        <Image
          quality={20}
          src={img}
          layout="responsive"
          width={width}
          height={height}
        />
      )}

      <div dangerouslySetInnerHTML={createMarkup(post.excerpt.rendered)} />
    </Article>
  );
}
