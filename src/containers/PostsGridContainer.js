// @flow
import React, {useCallback} from 'react';
import {usePosts} from '../hooks/usePosts';
import PostsGrid from '../components/PostsGrid';

const PostsGridContainer = () => {
    const {loading, error, posts, update, remove} = usePosts();
    const onEdit = useCallback(update);
    const onRemove = useCallback(remove);
    return (
        <PostsGrid
            loading={loading}
            error={error}
            posts={posts}
            onEdit={onEdit}
            onRemove={onRemove}
        />
    );
};

export default PostsGridContainer;