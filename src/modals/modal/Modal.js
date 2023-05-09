import './Modal.css';

export function Modal({ modalTitle, toggleOpen, content }) {

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
                  {content}
                </div>
            </div>
        </div>);
}