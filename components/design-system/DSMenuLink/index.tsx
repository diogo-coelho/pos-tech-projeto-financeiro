import NextLink from 'next/link';
import { MenuLinkProps } from "./ds_menu_link";
import './DSMenuLink.scss';

const DSMenuLink = (props: MenuLinkProps) => {
  return (
    <>
      <li className="menu-link-container">
        <NextLink href={props.href}>
          { props.children }
        </NextLink>
      </li>
    </>
  )
}

export default DSMenuLink;