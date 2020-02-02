// @flow
import React, {memo, useState} from 'react';
import LazyLoad from 'react-lazyload';
import ReactImageFallback from 'react-image-fallback';
import isEqual from '../../utils/isEqual';
import changeImageUrlSize from '../../utils/changeImageUrlSize';
import {LOADING_IMAGE} from '../../constants';
import ConfirmationModal from '../common/ConfirmationModal';
import PostModalEdit from '../PostModal/PostModalEdit';
import type {PostType} from '../../types';
import './index.scss';

type Props = {
    post: PostType,
    onClick: Function,
    onEdit: Function,
    onRemove: Function,
}

const Post = (props: Props) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteConfirmation, setDeleteConfirmation] = useState(false);
    const media = props.post.data.media[0];
    const imgUrl = changeImageUrlSize(media.image, 150, 200);
    return (
        <div className="Post">
            <LazyLoad once offset={300} height={150}>
                <ReactImageFallback
                    className="Post-cover"
                    alt="Cover"
                    src={imgUrl}
                    initialImage={LOADING_IMAGE}
                    fallbackImage={LOADING_IMAGE}
                    onClick={() => props.onClick()}
                />
                <div className="Post-text" onClick={() => props.onClick()}>
                    <div className="Post-title">{media.description}</div>
                    <div className="Post-description">{props.post.description}</div>
                </div>
                <div className="Post-actions">
                    <i
                        className="far fa-edit"
                        title="Edit post"
                        onClick={() => setShowEditModal(true)}
                    />
                    <i
                        className="far fa-trash-alt"
                        title="Delete post"
                        onClick={() => setDeleteConfirmation(true)}
                    />
                </div>

                <PostModalEdit
                    isOpen={showEditModal}
                    post={props.post}
                    onEdit={props.onEdit}
                    onBack={() => setShowEditModal(false)}
                    onClose={() => setShowEditModal(false)}
                />

                <ConfirmationModal
                    isOpen={showDeleteConfirmation}
                    onConfirm={() => props.onRemove(props.post.id)}
                    onClose={() => setDeleteConfirmation(false)}
                >
                    <div style={{textAlign: 'center'}}>
                        Delete post "{media.description}"?
                    </div>
                </ConfirmationModal>
            </LazyLoad>
        </div>
    );
};

function areEqual(prevProps, nextProps) {
    return isEqual(prevProps.post, nextProps.post);
}

export default memo(Post, areEqual);