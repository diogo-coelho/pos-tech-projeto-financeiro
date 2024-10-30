type Active = 'on' | 'off'

export interface ModalProps {
  children: ReactNode,
  active: Active,
  setActive: (active: boolean) => void,
  handleOnClose?: (
    data: { 
      args?: T | T[], 
      event: MouseEvent<HTMLButtonElement, MouseEvent> 
  }) => T,
}