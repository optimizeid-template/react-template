import styled from '@emotion/styled';
import React from 'react';
import Container from '../Container';

const Wrapper = styled.footer`
  padding: 60px 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #373f41;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }

    li {
      display: inline-block;
      margin-left: 56px;

      @media screen and (max-width: 768px) {
        margin: 0 15px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

function Footer() {
  const { companyName } = window.templateConfig;

  return (
    <Wrapper>
      <Container>
        <FooterBottom>
          <div>(c) {companyName}, All Right Reserve</div>
          <div>
            <ul>
              <li>Privacy Policy</li>
              <li>Term of Service</li>
              <li>Legal</li>
            </ul>
          </div>
        </FooterBottom>
      </Container>
    </Wrapper>
  );
}

export default Footer;
