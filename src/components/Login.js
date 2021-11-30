import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.png" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 10vw;
  position: relative;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  margin: auto;
  margin-bottom: 12px;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  color: #fff;
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-bottom: 20px;
  vertical-align: bottom;
  display: inline-block;
`;

export default Login;
