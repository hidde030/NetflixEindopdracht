import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { generateMedia } from 'styled-media-query';
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';


 class SignIn extends Component {
 render(){
     return(
        <div className="main-login-container">
        <div className="header-top">
          <Link to="/">
            <Logo src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <LoginForm />
        <LoginFooter />
      </div>
     )
 }
}

export default SignIn;
// Media
const customMedia = generateMedia({
  tablet: '640px',
  lgTablet: '740px'
});

// Logo
const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan('tablet')`
  top: 45%;
  left: 23%;
`}
`;
