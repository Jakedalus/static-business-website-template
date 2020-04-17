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
import { createGlobalStyle } from "styled-components"

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
  align-items: center;
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

  .light-or-dark-container {
    display: flex;
  }

  input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
  }
  
  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 25px;
    background: grey;
    background: var(--orange);
    display: block;
    border-radius: 100px;
    position: relative;
  }
  
  label:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22.5px;
    height: 22.5px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
  
  input:checked + label {
    background: #bada55;
    background: var(--dark_blue);
  }
  
  input:checked + label:after {
    left: calc(100% - 1.25px);
    transform: translateX(-100%);
  }
  
  // label:active:after {
  //   width: 32.5px;
  // }
  
  // centering
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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

const GlobalStyle = createGlobalStyle`
  ${props => props.theme ? `
  :root {
    --dark_blue: #0d2b45;
    --blue: #203c56;
    --purple: #544e68;
    --lavendar: #8d697a;
    --dark_orange: #d08159;
    --dark_orange: #AA5B33;
    --orange: #ffaa5e;
    --light_orange: #ffd4a3;
    --beige: #ffecd6;
    --off_white: #FFFFF0;
  }` : `
  :root {
    --dark_blue: #0d2b45;
    --blue: #203c56;
    --purple: #544e68;
    // --purple: #fff;
    --lavendar: #8d697a;
    --dark_orange: #d08159;
    --dark_orange: #AA5B33;
    --orange: #ffaa5e;
    --light_orange: #ffd4a3;
    --beige: #ffecd6;
    // --beige: #eee;
    --off_white: #FFFFF0;
  }`}
`;

class Layout extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {
      darkMode: false
    };
  }

  handleToggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  render() {

    // const lightTheme = {
    //   body: '#E2E2E2',
    //   text: '#363537',
    //   toggleBorder: '#FFF',
    //   gradient: 'linear-gradient(#39598A, #79D7ED)',
    // }


    const { children } = this.props;

    console.log('children:', children);
    console.log('this.state:', this.state);
    console.log('this.props:', this.props);

    return (
      <>
        <GlobalStyle theme={this.state.darkMode} />
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
                  <div className="light-or-dark-container">
                    <input 
                      type="checkbox" 
                      id="switch" 
                      onClick={this.handleToggleDarkMode} 
                    />
                    <label for="switch">Toggle</label>
                  </div>
                </>
              )
            }}
          />
        </Header>
        <Main>{children}</Main>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
