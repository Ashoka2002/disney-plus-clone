import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <CTA>
        <img src="images/cta-logo-one.svg" alt="cta-logo" />
        <Signup to="/">GET ALL THERE</Signup>
        <p>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of
          03/26/21, the price of Disney+ and The Disney Bundle will increase by $1
        </p>
        <img src="images/cta-logo-two.png" alt="cta-logo" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: start;
  justify-content: center;

  &::before {
    content: "";
    background: url("/images/login-background.jpg") center / cover no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  margin-top: 100px;
  width: 80%;
  padding: 80px 40px;
  text-align: center;

  p {
    font-size: 12px;
    text-align: center;
    letter-spacing: 1.5px;
    line-height: 1.5;
  }

  img {
    width: 100%;

    &:last-child {
      margin-top: 10px;
      width: 90%;
    }
  }
`;

const Signup = styled(Link)`
  width: 100%;
  display: block;
  background-color: #0063e3;
  letter-spacing: 1.5px;
  padding: 12px 0;
  text-align: center;
  text-decoration: none;
  color: #f9f9f9;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  transition: 250ms all;
  margin: 8px 0 12px;

  &:hover {
    background-color: #0483ee;
  }
`;
