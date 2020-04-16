import React from 'react';
import Hero from './hero';
import CallToActionGrid from './callToActionGrid';
import PriceList from './priceList';
import PostText from './postText';
import PostQuote from './postQuote';
import ImageWithCaption from './imageWithCaption';

const SliceZone = ({body}) => {
  console.log(body);
  return (
    <div>
      {body.map((bodyContent, i) => {
        if (bodyContent.type === 'hero') {
          return (
            <Hero 
              key={i}
              title={bodyContent.primary.hero_title}
              content={bodyContent.primary.hero_content}
              backgroundImage={bodyContent.primary.background_image ? bodyContent.primary.background_image.url : ''}
            />
            )
        } else if (bodyContent.type === 'call_to_action_grid') {
          return (
            <CallToActionGrid
              key={i}
              title={bodyContent.primary.section_title}
              callToActions={bodyContent.fields}
            />
          );
        } else if (bodyContent.type === 'price_list') {
          return (
            <PriceList
              key={i}
              title={bodyContent.primary.title}
              prices={bodyContent.fields}
            />
          );
        } else if (bodyContent.type === 'post_text') {
          return (
            <PostText
              key={i}
              // title={bodyContent.primary.title}
              text={bodyContent.primary.post_text}
            />
          );
        } else if (bodyContent.type === 'image_with_caption') {
          return (
            <ImageWithCaption
              key={i}
              image={bodyContent.primary.image}
              imageCaption={bodyContent.primary.image_caption}
            />
          );
        } else if (bodyContent.type === 'post_quote') {
          return (
            <PostQuote
              key={i}
              // title={bodyContent.primary.title}
              quote={bodyContent.primary.post_quote}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default SliceZone;