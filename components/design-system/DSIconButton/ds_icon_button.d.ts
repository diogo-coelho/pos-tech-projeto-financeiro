export enum ColorTypeEnum {
  "green" = 'var(--bb-color-green)',
  "light-green" = 'var(--bb-color-light-green)',
  "light-green-alpha" = 'var(--bb-color-light-green-alpha)',
  "red" = 'var(--bb-color-red)',
  "dark-grey" = 'var(--bb-color-dark-grey)',
  "light-grey" = 'var(--bb-color-light-grey)',
  "grey" = 'var(--bb-color-grey)'
}

export interface IconButtonProps {
  source: string,
  alt?: string,
  width?: number,
  height?: number,
  backgroundColor?: ColorTypeEnum,
  priority?: boolean,
  handleOnClick?: (
    data: { 
      args?: T | T[], 
      event: MouseEvent<HTMLButtonElement, MouseEvent> 
  }) => T,
}