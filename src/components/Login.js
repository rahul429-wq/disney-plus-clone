import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            doloribus a velit magni fugit dolorem placeat veniam minus maiores
            beatae vero esse nemo, omnis hic repellendus facilis repudiandae
            temporibus odit cumque deleniti at blanditiis accusantium? Facere
            aliquam laudantium est id.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: calc(100vh - 70px);
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
  }
`;

const Content = styled.div``;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  //   width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
