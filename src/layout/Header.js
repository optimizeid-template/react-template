import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Menu = styled.div`
  background-color: #fff;
  box-shadow: 0 0 3px #E2E8F0;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  padding: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #263238;
`;

function Header() {
  return (
    <Menu>
      <Ul>
        <Li>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/about">About</StyledLink>
        </Li>
      </Ul>
    </Menu>
  );
}

export default Header;
