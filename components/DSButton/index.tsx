import { ButtonProps } from './ds_button';
import './DSButton.scss';

const DSButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const className = (): string => {
    return [
      `button`, 
      props.variant ?? `primary`,
      props.size ?? ``
    ].toString().replaceAll(",", " ").trim();
  }

  return (
    <button 
      className={className()}
      type={props.type || 'button'}
      disabled={props.disabled || false}
      onClick={ (event) => props.handleOnClick?.({ event }) }
      {...props}
    >
      { props.children }
    </button>
  )
}

export default DSButton;