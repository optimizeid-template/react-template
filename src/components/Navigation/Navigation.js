import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Container from '../Container';
import { css } from '@emotion/react';

const MenuDesktop = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    margin-left: 32px;
    padding: 12px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuMobile = styled.div`
  position: relative;

  button {
    border: 1px solid #ddd;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
  }

  ul {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: #fff;
    border: 1px solid #e8e8e8;

    ${(props) =>
      props.show &&
      css`
        display: block;
      `}

    li {
      display: block;
      padding: 8px 20px;
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 2;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(5px);

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
  }
`;

const { sections } = window.templateConfig;
const mappedMenus = sections.map((section, index) => ({
  name: section.menuName,
  index,
}));
const filteredMenus = mappedMenus.filter((menu) => !!menu.name);

const menus = [
  {
    label: 'Home',
    url: '/',
  },
].concat(
  filteredMenus.map((menu) => ({
    label: menu.name,
    url: `#section-${menu.index}`,
  }))
);

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const menuClick = (url) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    } else {
      document.querySelector('#template').scrollIntoView({
        behavior: 'smooth',
      });
    }

    toggleMenu();
  };

  return (
    <MenuMobile show={showMenu}>
      <button type="button" onClick={toggleMenu}>
        <FaBars />
      </button>
      <ul>
        {menus.map((menu) => (
          <li key={menu.label} onClick={() => menuClick(menu.url)}>
            <Link to={menu.url}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </MenuMobile>
  );
}

function DesktopMenu() {
  const menuClick = (url) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      window.scrollTo({ top: element.offsetTop - 90, behavior: 'smooth' });
    } else {
      document.querySelector('#template').scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <MenuDesktop>
      {menus.map((menu) => (
        <li key={menu.label} onClick={() => menuClick(menu.url)}>
          <Link to={menu.url}>{menu.label}</Link>
        </li>
      ))}
    </MenuDesktop>
  );
}

function Navigation() {
  const { title } = window.templateConfig;

  return (
    <StyledNav>
      <Container>
        <Wrapper>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </Wrapper>
      </Container>
    </StyledNav>
  );
}

export default Navigation;
