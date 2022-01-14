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

    li {
      display: inline-block;
      margin-left: 56px;
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <FooterBottom>
          <div>(c) Company Name, All Right Reserve</div>
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
