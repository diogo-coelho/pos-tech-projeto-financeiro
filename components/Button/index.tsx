import { ButtonProps } from './button.d';
import './Button.scss';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const className = () => {
    return [
      `button`, 
      props.variant ?? ``,
      props.size ?? ``
    ].toString().replaceAll(",", " ");
  }

  return (
    <button className={className()}>{ props.children }</button>
  )
}

export default Button;