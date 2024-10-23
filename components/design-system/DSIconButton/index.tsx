import Image from 'next/image';

import { IconButtonProps } from "./ds_icon_button";
import './DSIconButton.scss';
import { CSSProperties } from 'react';

const DSIconButton = (props: IconButtonProps) => {
  const getClassName = (): string => {
    return [
      `icon-button-container`, 
      props.handleOnClick ? `pointer` : '',
    ].toString().replaceAll(",", " ").trim();
  }

  const getStyle = (): CSSProperties | undefined => {
    if (!props.backgroundColor) return undefined;
    return { 
      backgroundColor: props.backgroundColor
    }
  }

  return (
    <>
      <button 
        className={getClassName()}
        style={getStyle()}
      >
        <Image 
          src={props.source} 
          alt={props.alt || ''} 
          width={props.width || 0} 
          height={props.height || 0}
          priority={props.priority} 
          onClick={ (event) => props.handleOnClick?.({ event }) }
        />
      </button>
    </>
  )
}

export default DSIconButton;