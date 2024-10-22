import { InputProps } from './ds_input';
import './DSInput.scss';

const Input = (props: InputProps) => {
  const className = (mainClass: string): string => {
    return [
      mainClass,
      (props.inputSize || props['input-size']) ?? ``,
      props.align ? `align-${props.align}` : ``,
    ].toString().replaceAll(",", " ").trim();
  }

  return (
    <div className={className('input-container')} >
      <input
        className={className('input')}
        type={ props.type || `text` } 
        placeholder={ props.placeholder }
        disabled={ props.disabled || false }
        value={props.currentValue || props['current-value']}
        {...props}
      />
      { props.suffix && 
        <div className={`suffix${props.active === 'true' ? ` active` : ''}`}>
          <img src={`/images/${ props.suffix }`} alt="Icon" />
        </div>
      }
    </div>
  )
}

export default Input;