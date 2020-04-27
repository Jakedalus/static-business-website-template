import React from 'react';
import { Link } from 'gatsby';
import RichText from './richText';
import SliceZone from './sliceZone';
import styled from 'styled-components';

const underlineOnHover = `
  // &:before {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   height: 2px;
  //   bottom: 0;
  //   left: 0;
  //   background-color: var(--page_heading);
  //   visibility: hidden;
  //   -webkit-transform: scaleX(0);
  //   transform: scaleX(0);
  //   -webkit-transition: all 0.2s ease-in-out 0s;
  //   transition: all 0.2s ease-in-out 0s;
  // }

  // &:hover:before {
  //   visibility: visible;
  //   -webkit-transform: scaleX(1);
  //   transform: scaleX(1);
  // }

  {
    color: var(--page_heading);
    
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
  }

  &:hover, &:focus {
      background-size: 100% 2px;
  }
`;

const BlogPostWrapper = styled.section`
  max-width: var(--content_width);;
  margin: 40px auto;
  background: var(--page_background);
  color: var(--page_color);
  padding: 20px;
  border-radius: 10px;

  h1 {
    display: inline;
  }
  
  a {
    position: relative;
    text-decoration: none;
    transition: filter 0.2s ease-in-out 0s;

    p, h1 {
      position: relative;
      margin: 0;
      margin: 15px 0;
      width: fit-content;
      color: var(--page_heading);

      ${underlineOnHover}

      // &:after {
      //   content: "";
      //   position: absolute;
      //   width: 100%;
      //   height: 2px;
      //   bottom: 0;
      //   left: 0;
      //   background-color: var(--page_heading);
      //   visibility: hidden;
      //   transform: scaleX(0);
      //   transition: all 0.2s ease-in-out 0s;
      // }
  
      // &:hover:after {
      //   visibility: visible;
      //   transform: scaleX(1);
      // }
      
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
      </Link>
      <Link to={`/blog/${uid}`}>
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