import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  background: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style: none;

    li {
      display: inline-block;
      margin-left: 32px;
      padding: 12px;
    }
  }

  h1 {
    margin: 0;
  }
`;

const menus = [
  {
    label: 'Features',
    url: '#features',
  },
  {
    label: 'Community',
    url: '#community',
  },
  {
    label: 'Pricing',
    url: '#pricing',
  },
  {
    label: 'FAQ',
    url: '#faq',
  },
  {
    label: 'Blog',
    url: '#blog',
  },
];

function Navigation() {
  return (
    <StyledNav>
      <Container>
        <Wrapper>
          <div>
            <h1>Your Title</h1>
          </div>
          <div>
            <ul>
              {menus.map((menu) => (
                <li key={menu.label}>
                  <Link to={menu.url}>{menu.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Wrapper>
      </Container>
    </StyledNav>
  );
}

export default Navigation;
