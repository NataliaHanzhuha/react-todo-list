import './Modal.css';

const Modal = ({ children, modalTitle, toggleOpen }) => {

    return (<div className='modal-wrapper'
            onClick={toggleOpen}>
            <div className='modal-window'
                onClick={(e) => e.stopPropagation()}>
                <div className='modal-header'>
                    <h3>{modalTitle}</h3>

                    <button className='default-btn'
                        onClick={toggleOpen}>Close</button>
                </div>

                <div className="modal-content">
                  {children}
                </div>
            </div>
        </div>);
}

export default Modal;