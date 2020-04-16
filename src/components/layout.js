/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import "./layout.css";
import styled from 'styled-components';
import { darken, cssVar } from 'polished';

const Main = styled.main`
  margin: 0 auto;
`;

const navigationQuery = graphql`
{
  prismic {
    allNavigations {
      edges {
        node {
          branding
          navigationLinks {
            label
            link {
              ... on PRISMIC_Contact_page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Page {
                _meta {
                  uid
                }
              }
              ... on PRISMIC_Blog_home {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    }
  }
}`;

const NavLink = styled.div`
  margin: auto 0;

  a {
    position: relative;
    color: white;
    // color: var(--off_white);
    margin: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    // &:hover {
    //   color: var(--orange);
    //   color: var(--purple);
    //   color: red;
    // }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.2s ease-in-out 0s;
      transition: all 0.2s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;

const Header = styled.header`
  display: flex;
  background: var(--dark_blue);
  background: var(--dark_orange);
  background: var(--lavendar);
  background: var(--purple);
  
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    
    100% {
      opacity: 1;
    }
  }
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  // animation: .8s ease-in-out fadeIn;
`;

const Branding = styled.div`
  margin: auto 0;

  // animation: .8s ease-in-out fadeIn;

  a {
    position: relative;
    color: white;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.2s ease-in-out 0s;
      transition: all 0.2s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;


const Layout = ({ children }) => {

  return (
    <>
      <Header>
        <StaticQuery  
          query={`${navigationQuery}`}
          render={(data) => {
            console.log('data:', data);
            return (
              <>
                <Branding>
                  <Link to='/'>
                    {data.prismic.allNavigations.edges[0].node.branding}
                  </Link>
                </Branding>
                <NavLinks>
                  {
                    data.prismic.allNavigations.edges[0].node.navigationLinks.map(link => {
                      return (
                      <NavLink key={link.link._meta.uid}>
                        <Link to={`/${link.link._meta.uid}`}>
                          {link.label}
                        </Link>
                      </NavLink>
                      );
                  })}
                </NavLinks>
              </>
            )
          }}
        />
      </Header>
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
