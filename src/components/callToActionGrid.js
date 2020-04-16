import React from 'react';
import styled from 'styled-components';
import RichText from './richText';
import CallToActionBlock from './callToActionBlock';

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;

  > h1 {
    color: var(--blue);
  }
`;

const CallToActionGrid = ({title, callToActions}) => {
  console.log(title, callToActions);
  return (
    <CallToActionGridWrapper>
      <RichText render={title} />
      {callToActions.map((callToAction, i) => (
        <CallToActionBlock 
          key={i} 
          title={callToAction.call_to_action_title}
          content={callToAction.content}
          buttonLabel={callToAction.button_label}
          buttonDestination={`/${callToAction.button_destination._meta.uid}`}
          contentType={callToAction.button_destination._meta.type}
          featuredImage={callToAction.featured_image.url}
        />
      ))}
    </CallToActionGridWrapper>
  )
};

export default CallToActionGrid;