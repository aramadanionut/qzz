import React from 'react';
import { createPortal } from 'react-dom';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import IconButton from 'components/common/buttons/icon-button/IconButton';
import Button from 'components/common/buttons/button/Button';

import './Modal.scss';
import { COLORS, DIRECTIONS, SIZES } from 'utils/constants';
import SimpleButton from 'components/common/buttons/simple-button/SimpleButton';

const Modal = (props) => {
    const {
        heading,
        message,
        warning,
        isShowing,
        hide,
        children,
        onConfirm,
        confirmText,
        onCancel,
        cancelText
    } = props;

    const hasFooter = (onConfirm || onCancel);

    if (!isShowing) return null;

    return (
        createPortal(
            <React.Fragment>
                <div className="Modal__overlay"/>
                <div className="Modal__container" aria-modal aria-hidden tabIndex={-1} role="dialog">
                    <div className="Modal">
                        <div className="Modal__header">
                            <div className="Modal__header__close">
                                <IconButton
                                    size={ 16 }
                                    icon={ faTimes }
                                    onClick={ hide }
                                />
                            </div>
                        </div>
                        <div className="Modal__content">
                            {heading && (
                                <p className="Modal__content__heading">{ heading }</p>
                            )}
                            
                            { children }

                            {message && (
                                <p className="Modal__content__message">{ message }</p>
                            )}

                            {warning && (
                                <p className="Modal__content__warning">{ warning }</p>
                            )}
                        </div>
                        {hasFooter && (
                            <div className="Modal__footer">
                                {onConfirm && (
                                    <SimpleButton
                                        onClick={ onConfirm }>
                                        { confirmText || 'Ok' }
                                    </SimpleButton>
                                )}
                                {onCancel && (
                                    <SimpleButton
                                        direction={ DIRECTIONS.LEFT }
                                        color={ COLORS.SECONDARY}
                                        onClick={ onCancel }>
                                        { cancelText || 'Cancel' }
                                    </SimpleButton>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </React.Fragment>, document.body
        )
    );
}

export default Modal;