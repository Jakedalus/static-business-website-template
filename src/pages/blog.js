import React, {useState, useEffect, useRef} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {graphql} from 'gatsby';
import { getCursorFromDocumentIndex } from 'gatsby-source-prismic-graphql';
import Layout from '../components/layout';
import styled from 'styled-components';
import RichText from '../components/richText';
import BlogPost from '../components/blogPost';

export const query = graphql`
query BlogQuery($first: Int = 3, $last: Int, $after: String, $before: String){
  prismic {
    allBlog_posts(first: $first, last: $last, after: $after, before: $before, sortBy: date_DESC) {
      edges {
        node {
          _meta {
            uid
          }
          blog_post_title
          body {
            ... on PRISMIC_Blog_postBodyText {
              primary {
                post_text
              }
              type
            }
            ... on PRISMIC_Blog_postBodyQuote {
              type
              label
              primary {
                post_quote
              }
            }
            ... on PRISMIC_Blog_postBodyImage_with_caption {
              type
              label
              primary {
                image
                image_caption
              }
            }
          }
          date
        }
        cursor
      }
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
    allBlog_homes {
      edges {
        node {
          blog_home_description
          blog_home_image
          blog_home_title
        }
      }
    }
  }
}`;



const BlogWrapper = styled.section`
  // background: var(--light_gray);
  // background: #e9eef0;
  // position: relative;
  
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // text-align: center;
  // color: var(--dark_red);
  // color: var(--yellow);

  

  .blog-home-header {
    background: url('${props => props.backgroundImage}');
    background-size: 100%;
    background-origin: border-box;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(60vh - 66px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    .blog-home-header-content {
      width: 800px;
      padding: 20px;
      background: rgba(0,0,0,0.5);
      border-radius: 10px;
    }
  }

  .blog-home-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    margin: 0 auto;

    .blog-posts {
      // animation: .2s ease-in-out .1s fadeInMoveUp backwards;
    }

    button {
      cursor: pointer;
    }
  }

  img {
    height: 50vh;
  }

  // @keyframes fadeInMoveUp {
  //   0% {
  //     opacity: 0;
  //     transform: translateY(60px);
  //   }
    
  //   100% {
  //     opacity: 1;
  //     transform: translateY(0);
  //   }
  // }

  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }

`;



const Blog = props => {
  const limit = 3;
  const [page, setPage] = useState(-1);
  const didMountRef = useRef(false);
  const [data, setData] = useState(props.data.prismic);

  console.log('props:', props);
  console.log('$$ page:', page);
  console.log('$$ getCursorFromDocumentIndex(page):',getCursorFromDocumentIndex(page));
  console.log('data:', data);
  // console.log('--> data.allBlog_posts.edges[0].cursor:', data.allBlog_posts.edges[0].cursor);
  // console.log('--> data.allBlog_posts.edges[0].node.date:', data.allBlog_posts.edges[0].node.date);
  // console.log('didMountRef:', didMountRef);
  console.log('----');
  // console.log(props.data.prismic.allBlog_posts.edges);

  const onPreviousClick = () => setPage(page - limit);
  const onNextClick = () => setPage(page + limit);


  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    props.prismic
      .load({ variables: { after: getCursorFromDocumentIndex(page)  } })
      .then(res => {
        console.log('props.prismic.load(), res.data:', res.data);
        return setData(res.data)
      });

  }, [page]);

  return (
    <Layout>
      <BlogWrapper
        backgroundImage={props.data.prismic.allBlog_homes.edges[0].node.blog_home_image.url}
      >
        <div className="blog-home-header">
          <div className="blog-home-header-content">
            <RichText render={props.data.prismic.allBlog_homes.edges[0].node.blog_home_title} />
            <RichText render={props.data.prismic.allBlog_homes.edges[0].node.blog_home_description} />
          </div>
        </div>
        <div className="blog-home-content">
          <div className="blog-posts">
            <TransitionGroup className="blog-posts-list">
            {
                data.allBlog_posts.edges.map((blog, i) => {
                console.log('current blog:', blog);
                return (
                <CSSTransition
                  key={blog.cursor}  // key must be unique for each NEW blog post on loading data for TransitionGroup to work
                  timeout={500}
                  classNames="item"
                >
                  <BlogPost 
                    // key={i}
                    title={blog.node.blog_post_title}
                    body={blog.node.body}
                    date={blog.node.date}
                    uid={blog.node._meta.uid}
                  />
                </CSSTransition>
              )})
            }
            </TransitionGroup>
          </div>
          <div>
            <button
              // disabled={!data.allBlog_posts.pageInfo.hasPreviousPage}
              disabled={page <= 0}
              // onClick={() => props.prismic.load({variables: { limit: 2 }})}
              // onClick={() => handleClickBlogNavigation('prev')}
              onClick={onPreviousClick}
            >
              Prev
            </button>
            <button
              disabled={!data.allBlog_posts.pageInfo.hasNextPage}
              // onClick={() => props.prismic.load({variables: { limit: 1 }})}
              // onClick={() => handleClickBlogNavigation('next')}
              onClick={onNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </BlogWrapper>
    </Layout>
  );

};

export default Blog;