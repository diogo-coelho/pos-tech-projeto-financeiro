import DSIconButton from "../DSIconButton";
import { ModalProps } from "./ds_modal";
import './DSModal.scss'

const DSModal = (props: ModalProps) => {

  const getClassName = (mainClass: string): string => {
    return [
      mainClass,
      props.active === 'on' ? `active` : ``
    ].toString().replaceAll(",", " ").trim();
  }

  const closeModal = (event: MouseEvent): void => {
    props.setActive(false)
    setTimeout(() => props.handleOnClose?.({ event }), 300);
  }

  return (
    <>
      <div className="modal">
        <div className={getClassName('modal-container')}>
          { props.children }
          <div className="close-button">
            <DSIconButton
              source="/images/close_icon.png"
              alt="Botão de fechar"
              width={18}
              height={20}
              handleOnClick={({ event }) => closeModal(event) }
            ></DSIconButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default DSModal;