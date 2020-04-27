import React from 'react';
import RichText from './richText';
import styled from 'styled-components';
import PriceItem from './priceItem';

const PriceListWrapper = styled.section`
  max-width: var(--content_width);
  margin: 40px auto;

  > h1 {
    color: var(--blue);
  }

  .price-items-container {
    display: flex;
  }

  .price-list-item:first-child {
    margin-right: 20px;
  }

  .price-list-item:last-child {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    .price-items-container {
      flex-direction: column;
      // align-items: center;
      // justify-content: center;

      .price-list-item:first-child, .price-list-item:last-child {
        margin-right: 0;
        margin-left: 0;
      }

      > .price-list-item {
        margin-bottom: 40px;
      }
    }
  }
`;

const PriceList = (props) => {
  const {title, prices} = props;
  console.log(props);
  return (
    <PriceListWrapper>
      <RichText render={title} />
      <div className="price-items-container">
        {prices.map((price, i) =>(
          <PriceItem 
            key={i}
            title={price.price_list_title}
            description={price.price_list_description}
            price={price.price_per_month}
            mostPopular={price.price_type === 'Most Popular'}
          />
        ))}
      </div>
      
    </PriceListWrapper>
  )
}

export default PriceList;