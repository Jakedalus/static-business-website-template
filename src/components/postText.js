import React from 'react';
import RichText from './richText';
// import styled from 'styled-components';

const PostText = ({text}) => {
  console.log(text);

  return (
    <div>
      <RichText render={text} />
    </div>
  );
};

export default PostText;
