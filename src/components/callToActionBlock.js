import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import {Link} from 'gatsby';

const CallToActionBlockWrapper = styled.section`
  padding: 20px;
  background: var(--lavendar);
  color: white;

  border-radius: 20px;
  margin: 20px 0;

  .call-to-action-content {
    display: flex;

    .featured-image-wrapper {
      margin: auto 10px;
      margin-left: auto;
      background: white;
      padding: 10px;
      border-radius: 10px;
    }

    img {
      max-width: 250px;
      margin: 0;
    }
  }
`;

const Button = styled.div`
  background: var(--blue);
  display: inline-block;
  border-radius: 4px;
  cursor: pointer;

  transition: filter 0.2s ease-in-out 0s;

  a {
    color: white;
    padding: 4px 8px;
    display: inline-block;
    text-decoration: none;
  }

  &:hover {
    filter: brightness(170%);
  }
`;

const CallToActionBlock = ({title, content, buttonLabel, buttonDestination, featuredImage, contentType}) => {
  console.log(title, content, buttonLabel, buttonDestination, contentType);
  return (
    <CallToActionBlockWrapper>
      <RichText render={title} />
      <div className="call-to-action-content">
        <RichText render={content} />
        <div className="featured-image-wrapper">
           <img src={featuredImage} alt="feature" />
        </div>
      </div>
      <Button>
        <Link to={contentType === 'blog_post' ? `blog/${buttonDestination}` : buttonDestination}>
          {buttonLabel}
        </Link>
      </Button>
    </CallToActionBlockWrapper>
  )
};

export default CallToActionBlock;