// @flow
import React, {useState} from 'react';
import {PostDirection} from '../../constants';
import PostModalEdit from './PostModalEdit';
import PostModalRead from './PostModalRead';
import type {PostType} from '../../types';
import './index.scss';

type Props = {
    post: PostType,
    editMode: boolean,
    showPost: (direction: $Values<typeof PostDirection>) => void,
    onClose: Function,
    onEdit: Function,
    onRemove: Function,
}

const PostModal = (props: Props) => {
    const [editMode, setEditMode] = useState(props.editMode);
    return (
        <>
            {editMode ? (
                <PostModalEdit
                    post={props.post}
                    onEdit={props.onEdit}
                    onBack={() => setEditMode(false)}
                    onClose={props.onClose}
                />
            ) : (
                <PostModalRead
                    post={props.post}
                    showPost={props.showPost}
                    onEdit={() => setEditMode(true)}
                    onRemove={props.onRemove}
                    onClose={() => props.onClose()}
                />
            )}
        </>
    );
};

PostModal.defaultProps = {
    editMode: false
};

export default PostModal;