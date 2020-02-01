const API_URL = 'http://localhost:3001';
export const POST_API_URL = `${API_URL}/posts`;

export const PostDirection = Object.freeze({
    PREVIOUS: 'PREVIOUS',
    NEXT: 'NEXT'
});

export const LOADING_IMAGE: string = `${process.env.PUBLIC_URL}/loading.gif`;