import React from 'react';
import RichText from './richText';
import styled from 'styled-components';

const PostQuoteWrapper = styled.div`
  // background: rgba(0,0,0,0.2);
  padding: 0 8px;
  margin: 8px 0 20px 0;
  font-style: italic;
  font-weight: bold;
  font-size: 22px;
  color: var(--postQuote_color);
  border-left: 5px solid var(--postQuote_color);

  p {
    margin: 0;
    padding: 0; 
  }
`;

const PostQuote = ({quote}) => {
  console.log(quote);

  return (
    <PostQuoteWrapper>
      <RichText render={quote} />
    </PostQuoteWrapper>
  );
};

export default PostQuote;