import { useRef } from "react";
import { MenuProps } from "./ds_menu";
import DSMenuLink from "../DSMenuLink";
import './DSMenu.scss';
import DSIconButton from "../DSIconButton";
import useOutsideClick from "@/shared/directives/useOutsideClick";

const DSMenu = (props: MenuProps) => {
  const ref = useRef<HTMLDivElement>(null)
  
  const getClassName = (mainClass: string): string => {
    return [
      mainClass,
      props.active ? `active` : ``,
      props.viewport ?? '',
      props.hidden ? 'hidden' : '',
    ].toString().replaceAll(",", " ").trim();
  }

  const isTabletViewport = (): boolean => props.viewport! && props.viewport === 'tablet-view'

  const handleClickOutside = () => props.handleOnClose?.({ args: true });
  useOutsideClick({ ref, handler: handleClickOutside });  

  return (
    <>
      <nav 
        ref={ref}
        className={ getClassName("menu-container")}        
      >
        <div>
          <ul>
            { props.menuItems &&
              props.menuItems.map((item, index) => (
                <DSMenuLink 
                  key={index}
                  href={item.href}
                  noBorders={isTabletViewport()}
                  {...props}
                >  
                { item.label }              
                </DSMenuLink>
              ))}
          </ul>

          <div className="close-button">
            <DSIconButton
              source="/svgs/close_icon.svg"
              alt="Botão de fechar"
              width={14}
              height={14}
              handleOnClick={(event) => props.handleOnClose?.({ event }) }
            ></DSIconButton>
          </div>
        </div>
      </nav>
    </>
  )
}

export default DSMenu;