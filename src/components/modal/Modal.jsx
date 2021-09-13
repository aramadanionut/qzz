import React from 'react';
import { createPortal } from 'react-dom';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Modal.scss';

const Modal = (props) => {
    const { isShowing, hide, children } = props;

    if (!isShowing) return null

    return (
        createPortal(
            <React.Fragment>
                <div className="Modal__overlay"/>
                <div className="Modal__container" aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className="Modal">
                        <div className="Modal__header">
                            <div className="Modal__header__close">

                            </div>
                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="Modal__content">
                            { children }
                        </div>
                        <div className="Modal__footer">
                            Footer
                        </div>
                    </div>
                </div>
            </React.Fragment>, document.body
        )
    );
}

export default Modal;