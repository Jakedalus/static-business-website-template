import React from 'react';
import RichText from './richText';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  background: url('${props => props.backgroundImage}');
  // background: var(--light_gray);
  background-size: 100%;
  background-origin: border-box;
  background-position: center;
  // background-position-x: 1px;
  background-repeat: no-repeat;
  height: calc(100vh - 166px);
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--orange);

  div {
    max-width: 800px;
    margin: 0 auto;
    // background: rgba(0,0,0,0.6);
    padding: 50px 30px;
    border-radius: 10px;

    animation: .8s ease-in-out .2s fadeInMoveUp backwards;

    h1, p {
      text-shadow: 2px 2px 2px black;
    }

    h1 {
      font-size: 60px;
    }

    p {
      font-size: 20px;
      font-weight: bold;
    }
  }

  @keyframes fadeInMoveUp {
    0% {
      opacity: 0;
      transform: translateY(60px);
    }
    
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Hero = ({title, content, backgroundImage}) => {
  console.log(title, content, backgroundImage);
  return (
    <HeroWrapper 
      backgroundImage={backgroundImage}
    >
      <div>
        <RichText render={title} />
        <p>{content}</p>
      </div>
    </HeroWrapper>
  );
};

export default Hero;