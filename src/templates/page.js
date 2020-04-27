import React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/richText';
import Layout from '../components/layout';
import SliceZone from '../components/sliceZone';
import styled from 'styled-components';

export const query = graphql`
query PageQuery($id: String){
  prismic {
    allPages(id: $id) {
      edges {
        node {
          body {
            ... on PRISMIC_PageBodyCall_to_action_grid {
              type
              label
              primary {
                section_title
              }
              fields {
                button_destination {
                  ... on PRISMIC_Contact_page {
                    _meta {
                      uid
                      type
                    }
                  }
                  ... on PRISMIC_Page {
                    _meta {
                      uid
                      type
                    }
                  }
                  ... on PRISMIC_Blog_home {
                    _meta {
                      uid
                      type
                    }
                  }
                  ... on PRISMIC_Blog_post {
                    _meta {
                      uid
                      type
                    }
                  }
                }
                button_label
                call_to_action_title
                content
                featured_image
              }
            }
          }
          page_title
          content
          _meta {
            uid
            id
          }
        }
      }
    }
  }
}`;

const PageWrapper = styled.section`
  max-width: var(--content_width);
  margin: 40px auto;
  padding: 20px;
  background: var(--page_background);
  color: var(--page_color);
  border-radius: 10px;

  > h1 {
    color: var(--page_heading);
  }
`;

const Page = props => {
  console.log('Page, props:', props);
  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title;
  const content = props.data.prismic.allPages.edges[0].node.content;
  return (
    <Layout>
      <PageWrapper>
        <RichText render={pageTitle} />
        <RichText render={content} />
        {
          props.data.prismic.allPages.edges[0].node.body &&
          <SliceZone body={props.data.prismic.allPages.edges[0].node.body} />
        }
      </PageWrapper>
      
    </Layout> 
  )
}

export default Page;