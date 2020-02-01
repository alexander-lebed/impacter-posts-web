// @flow
import React from 'react';
import './index.scss';

export type Props = {
    className?: string,
    isOpen: boolean,
    onClose: Function,
    children: any
}

const Modal = (props: Props) => {
    return (
        <div
            style={{display: props.isOpen ? 'block' : 'none'}}
            className="Modal-outer"
        >
            <div className="Modal-overlay" onClick={props.onClose} />
            <div onClick={props.onClose} />
            <div className={`Modal ${props.className || ''}`}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;