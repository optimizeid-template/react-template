import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Container from '../Container';

interface MappedMenu {
  name?: string;
  index: number;
}

interface Menu {
  label: string;
  url: string;
}

// Helper function to get menus from template config
function getMenusFromConfig(): Menu[] {
  const templateConfig = (window as any).templateConfig;
  if (!templateConfig || !templateConfig.sections) {
    return [{ label: 'Home', url: '/' }];
  }

  const mappedMenus: MappedMenu[] = templateConfig.sections.map((section: any, index: number) => ({
    name: section.menuName,
    index,
  }));
  const filteredMenus = mappedMenus.filter((menu: MappedMenu) => !!menu.name);

  return [
    {
      label: 'Home',
      url: '/',
    },
  ].concat(
    filteredMenus.map((menu: MappedMenu) => ({
      label: menu.name || '',
      url: `#section-${menu.index}`,
    }))
  );
}

function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const [menus, setMenus] = useState<Menu[]>([{ label: 'Home', url: '/' }]);

  useEffect(() => {
    // Update menus when template config is available
    const updateMenus = () => {
      setMenus(getMenusFromConfig());
    };

    // Check if config is already loaded
    if ((window as any).templateConfig) {
      updateMenus();
    }

    // Listen for template config loaded event
    window.addEventListener('templateConfigLoaded', updateMenus);

    return () => {
      window.removeEventListener('templateConfigLoaded', updateMenus);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const menuClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
      }
    } else {
      const templateElement = document.querySelector('#template');
      if (templateElement) {
        templateElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }

    toggleMenu();
  };

  return (
    <div className="relative lg:hidden">
      <button 
        type="button" 
        onClick={toggleMenu}
        className="border border-gray-300 bg-transparent p-2.5 rounded text-sm"
      >
        <FaBars />
      </button>
      <ul className={`${showMenu ? 'block' : 'hidden'} absolute top-full right-0 p-0 m-0 list-none bg-white border border-gray-200`}>
        {menus.map((menu) => (
          <li key={menu.label} onClick={() => menuClick(menu.url)} className="block py-2 px-5">
            <Link to={menu.url}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DesktopMenu() {
  const [menus, setMenus] = useState<Menu[]>([{ label: 'Home', url: '/' }]);

  useEffect(() => {
    // Update menus when template config is available
    const updateMenus = () => {
      setMenus(getMenusFromConfig());
    };

    // Check if config is already loaded
    if ((window as any).templateConfig) {
      updateMenus();
    }

    // Listen for template config loaded event
    window.addEventListener('templateConfigLoaded', updateMenus);

    return () => {
      window.removeEventListener('templateConfigLoaded', updateMenus);
    };
  }, []);
  const menuClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.querySelector(url);
      if (element) {
        window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' });
      }
    } else {
      const templateElement = document.querySelector('#template');
      if (templateElement) {
        templateElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <ul className="list-none hidden lg:block">
      {menus.map((menu) => (
        <li key={menu.label} onClick={() => menuClick(menu.url)} className="inline-block ml-8 p-3">
          <Link to={menu.url}>{menu.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function Navigation() {
  const [title, setTitle] = useState('Default Title');

  useEffect(() => {
    // Update title when template config is available
    const updateTitle = () => {
      const templateConfig = (window as any).templateConfig;
      if (templateConfig && templateConfig.title) {
        setTitle(templateConfig.title);
      }
    };

    // Check if config is already loaded
    if ((window as any).templateConfig) {
      updateTitle();
    }

    // Listen for template config loaded event
    window.addEventListener('templateConfigLoaded', updateTitle);

    return () => {
      window.removeEventListener('templateConfigLoaded', updateTitle);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-[2] bg-white/70 backdrop-blur-sm backdrop-saturate-[180%] md:py-2.5">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="m-0">{title}</h1>
          </div>
          <div>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;