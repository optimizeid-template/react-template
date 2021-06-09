import React from 'react';
import styled from '@emotion/styled';
import menus from '../../constant/menus';

const Menu = styled.div`
  padding: 15px 10px;
  cursor: pointer;

  &:hover {
    color: #805ad5;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
`;

function Navigation() {
  const gotoElement = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav>
      {menus.map((menu) => (
        <Menu key={menu.id} onClick={() => gotoElement(menu.id)}>
          {menu.name}
        </Menu>
      ))}
    </Nav>
  );
}

export default Navigation;
