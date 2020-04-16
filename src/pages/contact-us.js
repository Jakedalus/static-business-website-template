import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from '../components/richText';

export const query = graphql`
{
  prismic {
    allContact_pages {
      edges {
        node {
          form_title
          form_description
          form_fields {
            field_name
            field_type
            required
          }
        }
      }
    }
  }
}`;

const Form = styled.form`
  padding: 10px;
  background: var(--lavendar);
  border-radius: 10px;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  input, textarea {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 40px;
    border: 1px solid #eee;
    width: 100%;
    padding: 5px;
  }

  textarea {
    resize: none;
    height: 100px;
  }
`;

const Button = styled.button`
  background: var(--blue);
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border: none;
  border-radius: 4px;

  &:hover {
    filter: brightness(170%);
  }
`;

const ContentWrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  background: var(--dark_blue);
  color: white;
  padding: 20px;
  border-radius: 10px;

  a {
    color: var(--yellow);
  }
`;

const ContactUs = (props) => {
  console.log(props);
  return (
    <Layout>
      <ContentWrapper>
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_title} />
        <RichText render={props.data.prismic.allContact_pages.edges[0].node.form_description} />
        <Form 
          name="contact-us"
          method="POST"
          action="/contact-success"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-us"/>
          {props.data.prismic.allContact_pages.edges[0].node.form_fields.map((field, i) => {
            if (field.field_type === 'textarea') {
              return (
                <div key={i}>
                  <textarea 
                    name={field.field_name}
                    placeholder={field.field_name} 
                    required={field.required === 'yes'}
                  />
                </div>
              )
            } else {
              return (
                <div key={i}>
                  <input 
                    name={field.field_name}
                    type={field.field_type}
                    placeholder={field.field_name} 
                    required={field.required === 'yes'}
                  />
                </div>
              )
            }
          })}
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </ContentWrapper>
    </Layout>
  )
};

export default ContactUs;