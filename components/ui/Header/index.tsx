"use client";

import React, { useState } from 'react';

import './Header.scss';
import DSMenu from '@/components/design-system/DSMenu';
import DSIconButton from '@/components/design-system/DSIconButton';
import { ViewPort } from '@/components/design-system/DSMenu/ds_menu';
import { UserProps } from '@/types/user';

const Header = (props: UserProps) => {
  const TABLET_VIEW_SIZE = 720;
  const DESKTOP_VIEW_SIZE = 1120;

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
    setScreenWidth(window.innerWidth);   
  }, [])

  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }    
  }, [])
  
  return (
    <>
      <header className="header">
        <div className="header-container">
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
            <p className="username">
              { props.name }
            </p>
            <DSIconButton
              source="/svgs/avatar.svg"
              alt="Avatar do usuário"
              width={40}
              height={40}
              priority={true}
            ></DSIconButton>
          </div>
        </div>
      </header>

      <div className="header-desktop-hidden">
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
      </div>
    </>
  )
}

export default Header;