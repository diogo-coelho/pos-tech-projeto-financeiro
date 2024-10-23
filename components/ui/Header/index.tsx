"use client";

import React, { useState } from 'react';

import './Header.scss';
import DSMenu from '@/components/design-system/DSMenu';
import DSIconButton from '@/components/design-system/DSIconButton';
import { ViewPort } from '@/components/design-system/DSMenu/ds_menu';

const Header = () => {
  const TABLET_VIEW_SIZE = 720;
  const DESKTOP_VIEW_SIZE = 1920;

  const [active, setActive] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const toggleActive = (active: boolean): void => {
    setActive(active)
  }
 
  const getViewPort = (): string => {
    if (screenWidth < TABLET_VIEW_SIZE)  return 'mobile-view'
    if (screenWidth < DESKTOP_VIEW_SIZE) return 'tablet-view'
    return 'desktop-view'
  }
  const isMobileView = (): boolean => getViewPort() === 'mobile-view'

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }    
  }, [])
  
  return (
    <>
      <header className="header-container">
        <div className="header-area">
          { isMobileView() &&
            <DSIconButton
              source="/svgs/menu_icon.svg"
              alt="Ícone do menu"
              width={24}
              height={16}
              handleOnClick={() => toggleActive(!active)}
            ></DSIconButton>
          }
        </div>
        <div className="header-area">
          <DSIconButton
            source="/svgs/avatar.svg"
            alt="Avatar do usuário"
            width={40}
            height={40}
            priority={true}
          ></DSIconButton>
        </div>
      </header>

      <DSMenu
        active={active}
        handleOnClose={() => toggleActive(false)}
        viewport={getViewPort() as ViewPort}
        menuItems={[
          { label: "Início", href:"/" },
          { label: "Transferências", href:"/transferencias" },
          { label: "Investimentos", href:"/investimentos" },
          { label: "Outros serviços", href:"/outros-servicos" }
        ]}
      ></DSMenu>
    </>
  )
}

export default Header;