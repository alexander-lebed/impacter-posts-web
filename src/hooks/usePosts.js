// @flow
import {useState, useEffect} from 'react';
import {PostApi} from '../api';
import type {PostType} from '../types';

/**
 * Return updated object of posts and some of CRUD functions.
 * NOTE: I could keep posts in reducer, just wanted to show for demo purposes of custom hooks.
 */
export function usePosts() {
    const [posts, setPosts] = useState<{[key: string]: PostType}>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const getAllPosts = async () => {
        try {
            setLoading(true);
            const response = await PostApi.getAll();
            const postsObj = response.data.reduce((obj, item) => (obj[item.id] = item, obj), {}); // best performance
            setPosts(postsObj);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    };

    useEffect ( () => {
        (async () => {
            await getAllPosts();
        })()
    }, []);

    const remove = async (id: string) => {
        try {
            await PostApi.remove(id);
            await getAllPosts();
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    };

    const update = async (post: PostType) => {
        try {
            await PostApi.update(post);
            await getAllPosts();
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    };

    return {
        posts,
        loading,
        error,
        update,
        remove
    }
}