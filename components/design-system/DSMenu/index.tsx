import { MenuProps } from "./ds_menu";
import DSMenuLink from "../DSMenuLink";
import './DSMenu.scss';
import DSIconButton from "../DSIconButton";

const DSMenu = (props: MenuProps) => {
  const getClassName = (mainClass: string): string => {
    return [
      mainClass,
      props.active ? `active` : ``
    ].toString().replaceAll(",", " ").trim();
  }

  return (
    <>
      <nav className={ getClassName("menu-container")}>
        <div>
          <ul>
            { props.menuItems &&
              props.menuItems.map((item, index) => (
                <DSMenuLink 
                  key={index}
                  href={item.href}
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