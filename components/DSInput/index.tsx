import { InputProps } from './DSinput.d';
import './DSInput.scss';

const Input = (props: InputProps) => {
  const className = (): string => {
    return [
      `input`,
      (props.inputSize || props['input-size']) ?? ``,
      props.align ? `align-${props.align}` : ``
    ].toString().replaceAll(",", " ").trim();
  }

  return (
    <div className={`input-container ${className()}`} >
      <input
        className={className()}
        type={ props.type || `text` } 
        placeholder={ props.placeholder }
        disabled={ props.disabled || false }
        {...props}
      />
        { props.suffix && 
          <div className="suffix">
            <img src={`/images/${ props.suffix }`} alt="Icon" />
          </div>
        }
    </div>
  )
}

export default Input;