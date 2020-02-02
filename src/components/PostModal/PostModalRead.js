// @flow
import React, {useState} from 'react';
import ReactImageFallback from "react-image-fallback";
import type {PostType} from '../../types';
import {PostDirection, LOADING_IMAGE} from '../../constants';
import Modal from '../common/Modal';
import ConfirmationModal from '../common/ConfirmationModal';
import './index.scss';

type Props = {
    isOpen: boolean,
    post: PostType,
    showPost: (direction: $Values<typeof PostDirection>) => void,
    onEdit: Function,
    onRemove: Function,
    onClose: Function
}

const PostModalRead = (props: Props) => {
    const [showDeleteConfirmation, setDeleteConfirmation] = useState(false);

    const onDeleteConfirm = () => {
        setDeleteConfirmation(false);
        props.onRemove(props.post.id);
        props.onClose();
    };

    const media = props.post.data.media[0];
    // const imgUrl = changeImageUrlSize(media.image, 300, 1200);
    return (
        <Modal className="PostModalRead" isOpen={props.isOpen} onClose={() => props.onClose()}>
            <h3 className="PostModalRead-title">
                <button onClick={() => props.showPost(PostDirection.PREVIOUS)}>
                    <i className="fas fa-arrow-left" /> Prev
                </button>
                {media.description}
                <button onClick={() => props.showPost(PostDirection.NEXT)}>
                    Next <i className="fas fa-arrow-right" />
                </button>
            </h3>
            <ReactImageFallback
                className="PostModalRead-img"
                alt="Post Cover"
                src={media.image}
                initialImage={LOADING_IMAGE}
                fallbackImage={LOADING_IMAGE}
            />
            <p>{props.post.description}</p>
            <div>Size: {media.width}x{media.height}</div>
            <div>Version: {media.version}</div>

            <div className="PostModal-actions">
                <button onClick={() => props.onEdit()}>
                    <i className="fas fa-edit" /> Edit
                </button>
                <button onClick={() => setDeleteConfirmation(true)}>
                    <i className="fas fa-trash-alt" /> Delete
                </button>
            </div>

            <ConfirmationModal
                isOpen={showDeleteConfirmation}
                onConfirm={onDeleteConfirm}
                onClose={() => setDeleteConfirmation(false)}
            >
                <div style={{textAlign: 'center'}}>
                    Delete post "{media.description}"?
                </div>
            </ConfirmationModal>
        </Modal>
    );
};

export default PostModalRead;