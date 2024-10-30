import Image from 'next/image';
import { InputProps } from './ds_input';
import './DSInput.scss';

const Input = (props: InputProps) => {
  const className = (mainClass: string): string => {
    return [
      mainClass,
      props.variant ?? '',
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
        onChange={ (event) => props.handleOnChange?.({ event }) }
        {...props}
      />
      { props.suffix && 
        <div className={`suffix${props.active === 'true' ? ` active` : ''}`}>
          <Image src={`/images${ props.suffix }`} alt="Icon" width={10} height={6} />
        </div>
      }
    </div>
  )
}

export default Input;