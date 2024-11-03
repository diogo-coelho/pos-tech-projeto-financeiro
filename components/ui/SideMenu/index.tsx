"use client";
import DSMenu from "@/components/design-system/DSMenu";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';

const SideMenu = () => {
  const pathname = usePathname();
  const DESKTOP_VIEW_SIZE = 1120;
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth); 
    setIsHidden(screenWidth < DESKTOP_VIEW_SIZE);  
  }, [])

  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setIsHidden(screenWidth < DESKTOP_VIEW_SIZE);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }    
  }, [])

  return (
    <>
      <aside className="side-menu">
        <DSMenu
          viewport="desktop-view"
          menuItems={[
            { label: "Início", href:"/dashboard", active: pathname === '/dashboard' ? 'on' : 'off' },
            { label: "Transferências", href:"/transferencias", active: pathname === '/transferencias' ? 'on' : 'off' },
            { label: "Investimentos", href:"/investimentos", active: pathname === '/investimentos' ? 'on' : 'off' },
            { label: "Outros serviços", href:"/outros-servicos", active: pathname === '/outros-servicos' ? 'on' : 'off' }
          ]} 
          hidden={isHidden}
        ></DSMenu>
      </aside>
    </>
  )
}

export default SideMenu;