import React, { useRef, useState } from 'react';
import { SelectProps } from './ds_select';
import DSInput from '../DSInput/index';
import "./DSSelect.scss";
import useOutsideClick from '@/shared/directives/useOutsideClick';

const DSSelect = (props: SelectProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null)

  const className = (mainClass: string): string => {
    return [
      mainClass, 
      (props.inputSize || props['input-size']) ?? ``,
    ].toString().replaceAll(",", " ").trim();
  }

  const toggleActive = (active: boolean): void => setActive(active)
  const handleOnClick = (option: string): void => setCurrentValue(option);
  const handleClickOutside = () => setActive(false)

  useOutsideClick({ ref, handler: handleClickOutside });

  React.useEffect(() => {
    if (!props.selectedValue) return;
    setCurrentValue(props.selectedValue);
  }, [])

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
          active={active.toString()}
          current-value={currentValue}
          readOnly
        />
        <div 
          className={className("select-dropdown")}
          data-active={active}
          ref={ref}
        >
          { props.options &&
            <ul>
            { props.options.map((option, index) => (
              <li 
                key={index}
                onClick={() => handleOnClick(option)}
                className={option === currentValue ? 'selected' : ''}
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