"use client";
import DSMenu from "@/components/design-system/DSMenu";
import { ViewPort } from "@/components/design-system/DSMenu/ds_menu";
import React, { useState } from "react";

const SideMenu = () => {
  const DESKTOP_VIEW_SIZE = 1920;
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const getViewPort = (): string => {
    if (screenWidth >= DESKTOP_VIEW_SIZE) return 'desktop-view'
    return ''
  }

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
      <DSMenu
        active={true}
        viewport={getViewPort() as ViewPort}
        menuItems={[
          { label: "Início", href:"/" },
          { label: "Transferências", href:"/transferencias" },
          { label: "Investimentos", href:"/investimentos" },
          { label: "Outros serviços", href:"/outros-servicos" }
        ]} 
        hidden={isHidden}
      ></DSMenu>
    </>
  )
}

export default SideMenu;