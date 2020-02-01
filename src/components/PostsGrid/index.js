// @flow
import React, {useState} from 'react';
import Loading from '../common/Loading';
import Error from '../common/Error';
import PostGridItem from '../PostGridItem';
import type {PostType} from '../../types';
import PostModal from '../PostModal';
import {PostDirection} from '../../constants';
import './index.scss';


type Props = {
    loading: boolean,
    error: string,
    posts: {[key: string]: PostType},
    onEdit: (post: PostType) => void,
    onRemove: (id: string) => void
}

const PostsGrid = (props: Props) => {
    const [currentPost, setCurrentPost] = useState<PostType | null>(null);

    const showPost = (direction: $Values<typeof PostDirection>) => {
        if (!currentPost) {
            return;
        }
        const keys = Object.keys(props.posts);
        let targetIndex;
        if (direction === PostDirection.NEXT) {
            targetIndex = keys.indexOf(currentPost.id) + 1;
        } else {
            targetIndex = keys.indexOf(currentPost.id) - 1;
        }
        const postKey = keys[targetIndex];
        if (postKey) {
            setCurrentPost(props.posts[postKey])
        }
    };

    return (
        <div>
            {props.loading && <Loading className='Posts-loading' />}
            {props.error && <Error message={props.error} />}

            <div className="Posts-grid">
                {Object.values(props.posts).map(post => (
                    <PostGridItem
                        key={post.id}
                        post={post}
                        onClick={() => setCurrentPost(post)}
                        onEdit={props.onEdit}
                        onRemove={props.onRemove}
                    />
                ))}
            </div>

            {currentPost && (
                <PostModal
                    post={currentPost}
                    showPost={direction => showPost(direction)}
                    onClose={() => setCurrentPost(null)}
                    onEdit={props.onEdit}
                    onRemove={props.onRemove}
                />
            )}
        </div>
    );
};

export default PostsGrid;