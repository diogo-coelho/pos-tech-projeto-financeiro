import { ContainerProps } from './container';
import './Container.scss';

const Container = (props: ContainerProps) => {
  const getClassName = (mainClass: string) => {
    return [
      mainClass, 
      props.gradient ?? ''
    ].toString().replaceAll(",", " ").trim();
  }

  return (
    <>
      <div className={getClassName("container")}>
        <div className="main-container">
          {props.children}
        </div>
      </div> 
    </>
  )
}

export default Container;