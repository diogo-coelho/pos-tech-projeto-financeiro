import { InputProps } from './input';
import styles from './Input.module.scss';

const Input = (props: InputProps) => {
  return (
    <input type={ props.type }/>
  )
}

export default Input;