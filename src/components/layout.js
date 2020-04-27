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
import { createGlobalStyle } from "styled-components";
import { FaPalette } from 'react-icons/fa';
import { IconContext } from 'react-icons';


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

const underlineOnHover = `
  // &:before {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   height: 2px;
  //   bottom: 0;
  //   left: 0;
  //   background-color: var(--navbar_color);
  //   visibility: hidden;
  //   -webkit-transform: scaleX(0);
  //   transform: scaleX(0);
  //   -webkit-transition: all 0.2s ease-in-out 0s;
  //   transition: all 0.2s ease-in-out 0s;
  // }

  // &:hover:before {
  //   visibility: visible;
  //   -webkit-transform: scaleX(1);
  //   transform: scaleX(1);
  // }

  {
    color: var(--navbar_color);
    
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
  }

  &:hover, &:focus {
      background-size: 100% 2px;
  }
`;

const NavLink = styled.div`
  margin: auto 0;

  a {
    position: relative;
    color: var(--navbar_color);
    margin: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    ${underlineOnHover}
  }
`;

const HeaderContent = styled.div `
  display: flex;
  align-items: center;
  width: var(--header_width);
  padding: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    // justify-content: flex-start;
    align-items: flex-start;
    width: var(--content_width);
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  background: var(--navbar_background);
  // height: 66px;

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
    margin: 5px 0;
    margin-left: -5px;
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
    background: var(--purple);
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

  @media (max-width: 800px) {
    flex-direction: column;
  }
  
  @media (max-width: 600px) {
    margin: 0;

    a {
      margin: 0;
    }
  }
`;

const Branding = styled.div`
  margin: auto 0;

  // animation: .8s ease-in-out fadeIn;

  a {
    position: relative;
    color: var(--navbar_color);
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;

    ${underlineOnHover}
  }
`;

const Footer = styled.footer`
  background: var(--navbar_background);
  // height: 220px;
  color: var(--footer_color);
  color: white;
  padding: 20px 0;

  .footer-container {
    display: flex;
    max-width: var(--content_width);
    margin: 0 auto;

    a {
      position: relative;
      color: var(--navbar_color);
      font-weight: bold;
      text-decoration: none;

      ${underlineOnHover}
    }

    ul, div {
      flex-grow: 1;
      flex-basis: 0;
    }

    p {
      margin: 0;
    }

    li {
      display: inline;
      position: relative;
      font-weight: bold;
      list-style: none;
      width: fit-content;
      color: var(--navbar_color);
      cursor: pointer;
      margin: 0;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${props => {
  console.log('GlobalStyle, props', props);

  return (

  `
  :root {
    --content_width: 800px;
    --header_width: 100%;
  }

  @media (max-width: 800px) {
    :root {
      --content_width: 600px;
    }
  }

  @media (max-width: 600px) {
    :root {
      --content_width: 450px;
    }
  }
  `.concat(
    
  props.theme ? `
  :root { // if in DarkMode
    --navbar_background: var(--dark_blue);
    --navbar_color: var(--orange);
    --callToActionBlock_background: var(--purple);
    --callToActionBlock__button: var(--dark_blue);
    --callToActionGrid_text-color: var(--beige);
    --priceItem_background: var(--purple);
    --mostPopularPriceItem_background: var(--dark_orange);
    --mostPopularFlag_background: var(--purple);
    --page_background: var(--blue);
    --page_color: white;
    --page_color: var(--beige);
    --page_heading: var(--orange);
    --imageCaption_color: var(--beige);
    --imageCaption_background: var(--purple);
    --postQuote_color: var(--beige);
    --blogNavButtons_color: var(--blue);
    --blogNavButtons_background: var(--orange);
    --blogNavButtons_background_hover: var(--light_orange);
    --footer_color: var(--off_white);
  }
  
  html {
    background: var(--blue);
  }` : `
  :root {
    --navbar_background: var(--purple);
    --navbar_color: white;
    --navbar_color: var(--light_orange);
    --callToActionBlock_background: var(--lavendar);
    --callToActionBlock__button: var(--blue);
    --callToActionGrid_text-color: var(--blue);
    --priceItem_background: var(--blue);
    --mostPopularPriceItem_background: var(--dark_orange);
    --mostPopularFlag_background: var(--purple);
    --page_background: var(--beige);
    --page_color: black;
    --page_color: var(--blue);
    --page_heading: var(--blue);
    --page_heading: var(--lavendar);
    --imageCaption_color: var(--blue);
    --imageCaption_background: var(--light_orange);
    --postQuote_color: var(--blue);
    --blogNavButtons_color: var(--beige);
    --blogNavButtons_background: var(--purple);
    --blogNavButtons_background_hover: var(--lavendar);
    --footer_color: var(--light_orange);
  }
  
  html {
    background: var(--beige);
  }`))}}
`;

const windowGlobal = typeof window !== 'undefined' && window;

class Layout extends React.Component  {

  constructor(props) {
    super(props);

    console.log('localStorage:', window.localStorage, JSON.parse(window.localStorage.getItem('darkMode')));

    this.state = {
      darkMode: window.localStorage.getItem('darkMode') !== null ? JSON.parse(window.localStorage.getItem('darkMode')) : false
    };
  }

  handleToggleDarkMode = async () => {
    await this.setState({ darkMode: !this.state.darkMode });
    window.localStorage.setItem('darkMode', this.state.darkMode);
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
          <HeaderContent>
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
                        checked={this.state.darkMode}
                        onChange={this.handleToggleDarkMode} 
                      />
                      <label htmlFor="switch">Toggle</label>
                    </div>
                  </>
                )
              }}
            />
          </HeaderContent>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <div className="footer-container">
            <IconContext.Provider value={{size: '12px'}}>
              <ul>
                <p>All Images from <a href="https://unsplash.com/">Unsplash</a></p> 
                <p>by the following photographers:</p>
                <li>
                  <a href="https://unsplash.com/@mikofilm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                     Mike Kononov 
                  </a>
                  <span>, </span>
                </li>
                <li>
                  <a href="https://unsplash.com/@seanpollock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                     Sean Pollock
                  </a>
                  <span>, </span>
                </li>
                <li>
                  <a href="https://unsplash.com/@adeolueletu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                     Adeolu Eletu
                  </a>
                  <span>, </span>
                </li>
                <li>
                  <a href="https://unsplash.com/@drew_beamer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                     Drew Beamer
                  </a>
                  <span>, </span>
                </li>
                <li>
                  <a href="https://unsplash.com/@brookecagle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                     Brooke Cagle
                  </a>
                </li>
              </ul>
              
              <div>
                <p>
                  Color Palette is &thinsp;
                  <a href="https://lospec.com/palette-list/slso8"><FaPalette />SLS08</a> from 
                </p>
                <p>
                  <a href="https://lospec.com/solosalsero">Luis Miguel Maldonado</a> on &thinsp;
                  <a href="https://lospec.com/">LOSPEC</a>
                </p>
              </div>
            </IconContext.Provider>
          </div>
        </Footer>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
