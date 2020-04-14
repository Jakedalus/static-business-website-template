import React from 'react';
import RichText from './richText';
import styled from 'styled-components';

const ImageWithCaptionWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  border: 6px solid var(--blue);
  border-radius: 5px;
  width: 350px;
  margin: 20px 0;

  img.post-image {
    height: auto;
    margin: 0;
  }

  figcaption {
    display: flex;
    // align-items: center;
    // height: 80px;
    font-style: italic;
    font-weight: bold; 
    color: var(--blue);
    background: rgba(0,0,0,0.2);
    margin: 0;
    padding: 6px 4px;

    p {
      margin: 0;
    }
  }
`;

const ImageWithCaption = ({image, imageCaption}) => {
  console.log(image, imageCaption);

  return (
    <ImageWithCaptionWrapper>
      <img className="post-image" src={image.url} alt={image.alt}/>
      <figcaption>
        <RichText render={imageCaption} />
      </figcaption>
    </ImageWithCaptionWrapper>
  );
};

export default ImageWithCaption;