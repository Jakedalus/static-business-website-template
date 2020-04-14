import React from 'react';
import RichText from './richText';
import styled from 'styled-components';

const PriceItemWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 0 10px;
  background: ${p => p.mostPopular ? 'var(--dark_blue)' : 'var(--yellow)'};
  color: ${p => p.mostPopular ? 'white' : 'black'};
  padding: 10px;
  position: relative;

  .price {
    text-align: center;
    font-size: 30px;
    background: rgba(0,0,0,0.2);
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;

    .duration {
      font-size: 16px;
    }
  }

  .description {
    margin-top: 20px;
  }

  .most-popular {
    position: absolute;
    right: 0;
    top: 0;
    background: var(--bright_red);
    padding: 5px;
    color: white;
  }
`;

const PriceItem = ({title, price, description, mostPopular}) => {
  console.log(title, price, description, mostPopular);
  return (
    <PriceItemWrapper mostPopular={mostPopular}>
      {!!mostPopular && 
        <div className="most-popular">
          Most popular
        </div>
      }
      <RichText render={title} />
      <div className="price">
        ${price} <span className="duration">/ month</span>
      </div> 
      <div className="description">
        <RichText render={description} />
      </div>
    </PriceItemWrapper>
  );
};

export default PriceItem;