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
  background: var(--page_background);
  color: var(--page_color);
  padding: 20px;
  border-radius: 10px;

  h1, .date {
    color: var(--page_heading);
  }


  a {
    position: relative;
    text-decoration: none;
    color: var(--blue); 
    transition: filter 0.2s ease-in-out 0s;

    

    p, h1 {
      position: relative;
      margin: 0;
      margin-bottom: 5px;
      width: fit-content;

      &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--page_heading);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.2s ease-in-out 0s;
      }
  
      &:hover:after {
        visibility: visible;
        transform: scaleX(1);
      }
      
    }

    .date {
      font-weight: bold;
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