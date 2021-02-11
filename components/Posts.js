import styled from "styled-components";
import Post from "./Post";

const NewsWrapper = styled.section`
  background-image: url(${"/images/bg-light.jpg"});
  background-repeat: repeat-y;
  background-position: 50%;
  background-size: 100% auto;
  padding: 5rem 1.5rem;
  margin: 0 -1.5rem;
  box-shadow: 0 -0.5rem 2rem 0 rgb(0 0 0 / 50%);
`;

const InnerWrapper = styled.div`
  max-width: 106rem;
  margin: auto;
  flex-wrap: wrap;
  display: flex;
`;

export default function Posts({ posts }) {
  return (
    <NewsWrapper id="news">
      <InnerWrapper>
        {!posts || posts.length < 1 ? (
          <h2>Couldnt find any posts</h2>
        ) : (
          <>
            {posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
          </>
        )}
      </InnerWrapper>
    </NewsWrapper>
  );
}
