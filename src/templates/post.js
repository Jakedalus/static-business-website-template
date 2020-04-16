import React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/richText';
import Layout from '../components/layout';
import SliceZone from '../components/sliceZone';
import styled from 'styled-components';

export const query = graphql`
query ($uid: String) {
  prismic {
    allBlog_posts(uid: $uid) {
      edges {
        node {
          _meta {
            uid
          }
          blog_post_title
          body {
            ... on PRISMIC_Blog_postBodyPost_text {
              type
              primary {
                post_text
              }
            }
            ... on PRISMIC_Blog_postBodyPost_quote {
              type
              primary {
                post_quote
              }
            }
            ... on PRISMIC_Blog_postBodyImage_with_caption {
              type
              primary {
                image
                image_caption
              }
            }
          }
          date
        }
      }
    }
  }
}`;


const PostWrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: var(--beige);
  color: black;
  border-radius: 10px;
`;

///

const Post = props => {
  console.log('Post, props:', props);
  const postTitle = props.data.prismic.allBlog_posts.edges[0].node.blog_post_title;
  const date = props.data.prismic.allBlog_posts.edges[0].node.date;
  const body = props.data.prismic.allBlog_posts.edges[0].node.body;
  return (
    <Layout>
      <PostWrapper>
        <RichText render={postTitle} />
        <p>{date}</p>
        {
          body &&
          <SliceZone body={body} />
        }
      </PostWrapper>
      
    </Layout> 
  )
}

export default Post;