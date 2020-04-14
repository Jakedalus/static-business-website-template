import React from 'react';
import RichText from './richText';
import styled from 'styled-components';

const PostQuoteWrapper = styled.div`
  background: rgba(0,0,0,0.2);
  padding: 4px 8px;
  font-style: italic;
  font-weight: bold;
  color: var(--blue);
  border-left: 5px solid var(--blue);
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