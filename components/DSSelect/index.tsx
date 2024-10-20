import { useState } from 'react';
import { SelectProps } from './ds_select';
import DSInput from '../DSInput/index';
import "./DSSelect.scss";

const DSSelect = (props: SelectProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>("");

  const className = (mainClass: string): string => {
    return [
      mainClass, 
      (props.inputSize || props['input-size']) ?? ``,
    ].toString().replaceAll(",", " ").trim();
  }

  const toggleActive = (active: boolean): void => {
    setActive(active)
  }

  const handleOnClick = (option: string): void => {
    setCurrentValue(option);
  }

  return (
    <>
      <div 
        className={className("select-container")}
        onClick={() => toggleActive(!active)}
      >
        <DSInput
          type="text" 
          input-size={props.inputSize || props['input-size']} 
          placeholder={ props.placeholder }
          suffix="/arrow_drop_down.png"
          active={active}
          currentValue={currentValue}
          readOnly
        />
        <div 
          className={className("select-dropdown")}
          data-active={active}
        >
          { props.options &&
            <ul>
            { props.options.map((option, index) => (
              <li 
                key={index}
                onClick={() => handleOnClick(option)}
              >{option}</li>
            ))}
            </ul>
          }
        </div>
      </div>
    </>
  )
}

export default DSSelect;