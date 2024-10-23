export interface MenuItem {
  href: string,
  label: string
}

export interface MenuProps {
  menuItems?: MenuItem[],
  active?: boolean,
  handleOnClose?: (
    data: { 
      args?: T | T[], 
      event: MouseEvent<HTMLButtonElement, MouseEvent> 
  }) => T,
}