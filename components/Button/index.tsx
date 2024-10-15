import { ButtonProps } from './button.d';
import './Button.scss';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const className = (): string => {
    return [
      `button`, 
      props.variant ?? ``,
      props.size ?? ``
    ].toString().replaceAll(",", " ");
  }

  return (
    <button 
      className={className()}
      type={props.type || 'button'}
      disabled={props.disabled || false}
      onClick={ (event) => props.handleOnClick?.({ event }) }
    >
      { props.children }
    </button>
  )
}

export default Button;