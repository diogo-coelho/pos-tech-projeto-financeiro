"use client";

import { useState } from 'react';

import { HeaderProps } from "./header";
import './Header.scss';
import DSMenu from '@/components/design-system/DSMenu';
import DSIconButton from '@/components/design-system/DSIconButton';

const Header = (props: HeaderProps) => {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = (active: boolean): void => {
    setActive(active)
  }
  
  return (
    <>
      <header className="header-container">
        <div className="header-area">
          <DSIconButton
            source="/svgs/menu_icon.svg"
            alt="Ícone do menu"
            width={24}
            height={16}
            handleOnClick={() => toggleActive(!active)}
          ></DSIconButton>
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