// @flow
import React from 'react';
import Modal, {Props as ModalProps} from '../Modal';
import './index.scss';

type Props = {
    onConfirm: Function;
} & ModalProps;

const ConfirmationModal = (props: Props) => {
    return (
        <Modal {...props}>
            {props.children}
            <div className="ConfirmationModal-actions">
                <button onClick={() => props.onConfirm()}>Yes</button>
                <button onClick={() => props.onClose()}>No</button>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;
