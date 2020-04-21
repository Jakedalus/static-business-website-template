import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const ContentWrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  background: var(--page_background);
  color: var(--page_color);
  padding: 20px;
  border-radius: 10px;

  h1 {
    color: var(--page_heading);
  }

  a {
    color: var(--yellow);
  }
`;

const ContactSuccess = () => {
  return (
    <Layout>
      <ContentWrapper>
        <h1>Thank you for getting in touch!</h1>
      </ContentWrapper>
    </Layout>
  )
};

export default ContactSuccess;