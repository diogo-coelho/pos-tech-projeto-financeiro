"use client";
import DSMenu from "@/components/design-system/DSMenu";
import { ViewPort } from "@/components/design-system/DSMenu/ds_menu";
import React, { useState } from "react";

const SideMenu = () => {
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
          active={true}
          viewport="desktop-view"
          menuItems={[
            { label: "Início", href:"/" },
            { label: "Transferências", href:"/transferencias" },
            { label: "Investimentos", href:"/investimentos" },
            { label: "Outros serviços", href:"/outros-servicos" }
          ]} 
          hidden={isHidden}
        ></DSMenu>
      </aside>
    </>
  )
}

export default SideMenu;