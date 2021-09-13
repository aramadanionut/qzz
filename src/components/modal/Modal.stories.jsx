import React from 'react';

import Logo from 'components/logo/Logo';
import Button from 'components/common/buttons/button/Button';

import useModal from 'hooks/useModal';

import Modal from './Modal';
import { SIZES } from 'utils/constants';

export default {
  component: Modal,
  title: 'Components/Modal',
  argTypes: {
  }
}

export const Primary = (args) => {
    const { isShowing, toggle } = useModal();

    return (
        <div className="Modal__story">
            <Button onClick={toggle}>Show Modal</Button>
            <Modal
                isShowing={ isShowing }
                hide={ toggle }
                onConfirm={ () => console.log('ok') }
                onCancel={ () => console.log('no') }>
                <Logo   
                    size={ SIZES.MEDIUM }
                />
            </Modal>
        </div>  
    )
};

Primary.args = {
};