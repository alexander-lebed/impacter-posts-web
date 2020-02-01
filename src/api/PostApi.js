import axios from 'axios';
import {POST_API_URL} from '../constants';
import type {PostType} from '../types';

export const PostApi = {
    getAll: () => axios.get(POST_API_URL),
    get: (id: string) => axios.get(`${POST_API_URL}/${id}`),
    create: (post: PostType) => axios.post(POST_API_URL, post),
    update: (post: PostType) => axios.put(`${POST_API_URL}/${post.id}`, post),
    remove: (id: string) => axios.delete(`${POST_API_URL}/${id}`)
};