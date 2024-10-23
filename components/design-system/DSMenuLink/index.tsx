import NextLink from 'next/link';
import { MenuLinkProps } from "./ds_menu_link";
import './DSMenuLink.scss';

const DSMenuLink = (props: MenuLinkProps) => {
  const getClassName = (): string => {
    return [
      `menu-link-container`, 
      props.noBorders ? `no-borders` : ``,
    ].toString().replaceAll(",", " ").trim();
  }

  return (
    <>
      <li className={getClassName()}>
        <NextLink href={props.href}>
          { props.children }
        </NextLink>
      </li>
    </>
  )
}

export default DSMenuLink;