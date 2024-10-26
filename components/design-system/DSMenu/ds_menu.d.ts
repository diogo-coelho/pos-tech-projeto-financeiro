export interface MenuItem {
  href: string,
  label: string
}

type ViewPort = 
  'mobile-view' |
  'tablet-view' |
  'desktop-view';

export interface MenuProps {
  menuItems?: MenuItem[],
  active?: boolean,
  viewport?: ViewPort,
  hidden?: boolean,
  handleOnClose?: (
    data: { 
      args?: T | T[], 
      event?: MouseEvent<HTMLButtonElement, MouseEvent> 
  }) => T,
}