// @flow
import React from 'react';
import ReactImageFallback from 'react-image-fallback';
import {LOADING_IMAGE} from '../../constants';
import {useMergeState} from '../../hooks/useMergeState';
import Modal from '../common/Modal';
import type {PostType} from '../../types';
import './index.scss';

type Props = {
    post: PostType,
    onEdit: Function,
    onBack: Function,
    onClose: Function
}


const PostModalEdit = (props: Props) => {
    const media = props.post.data.media[0];

    const [state, setState] = useMergeState({
        title: media.description,
        description: props.post.description,
        image: media.image,
        width: media.width,
        height: media.height,
        version: media.version
    });

    const save = () => {
        const postPayload = {
            ...props.post,
            description: state.description,
            data: {
                media: [{
                    ...media,
                    description: state.title,
                    image: state.image,
                    width: state.width,
                    height: state.height,
                    version: state.version
                }]
            }
        };
        props.onEdit(postPayload);
        props.onClose();
    };

    return (
        <Modal className="PostModalEdit" isOpen={true} onClose={() => props.onClose()}>
            <h3 className="PostModalEdit-title">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={state.title}
                    onChange={e => setState({title: e.target.value})}
                />
            </h3>
            <ReactImageFallback
                className="PostModalEdit-img"
                alt="Post Cover"
                src={state.image}
                initialImage={LOADING_IMAGE}
                fallbackImage={LOADING_IMAGE}
            />
            <input
                type="text"
                name="image"
                placeholder="Image link"
                className="PostModalEdit-img-input"
                value={state.image}
                onChange={e => setState({image: e.target.value})}
            />
            <p>
                <textarea
                    id="description"
                    className="PostModalEdit-description"
                    placeholder="Description"
                    rows={3}
                    value={state.description}
                    onChange={e => setState({description: e.target.value})}
                />
            </p>
            <div className="PostModalEdit-label-input">
                <label htmlFor="width">Width:</label>
                <input
                    id="width"
                    type="number"
                    name="width"
                    value={state.width}
                    onChange={e => setState({width: e.target.value})}
                />
            </div>
            <div className="PostModalEdit-label-input">
                <label htmlFor="height">Height:</label>
                <input
                    id="height"
                    type="number"
                    name="height"
                    value={state.height}
                    onChange={e => setState({height: e.target.value})}
                />
            </div>
            <div className="PostModalEdit-label-input">
                <label htmlFor="version">Version:</label>
                <input
                    id="version"
                    type="text"
                    name="width"
                    value={state.version}
                    onChange={e => setState({version: e.target.value})}
                />
            </div>

            <div className="PostModal-actions">
                <button className="primary-btn" onClick={() => save()}>Save</button>
                <button onClick={() => props.onBack()}>Back</button>
            </div>
        </Modal>
    );
};

export default PostModalEdit;