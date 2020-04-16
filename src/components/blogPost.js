import React from 'react';
import { Link } from 'gatsby';
import RichText from './richText';
import SliceZone from './sliceZone';
import styled from 'styled-components';
// import { bounce } from 'react-animations';

// const bounceAnimation = keyframes`${bounce}`;

const BlogPostWrapper = styled.section`
  max-width: 800px;
  min-width: 800px;
  margin: 40px auto;
  background: var(--beige);
  color: black;
  padding: 20px;
  border-radius: 10px;


  a {
    text-decoration: none;
    color: var(--blue); 
    transition: filter 0.2s ease-in-out 0s;

    p, h1 {
      margin: 0;
      margin-bottom: 5px;
    }

    .date {
      font-weight: bold;
    }

    &:hover {
      filter: brightness(200%);
    }
  }
`;

const BlogPost = ({title, date, body, uid}) => {

  console.log(title, date, body);

  return (
    <BlogPostWrapper>

      <Link to={`/blog/${uid}`}>
        <RichText render={title} />
        <p className="date">{date}</p>
      </Link>
      
      {
        body &&
        <SliceZone body={body} />
      }

    </BlogPostWrapper>
  )
};

export default BlogPost;