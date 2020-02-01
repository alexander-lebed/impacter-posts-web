/**
 * @param url example: 'https://picsum.photos/id/1025/4951/3301'
 * @param height
 * @param width
 * @returns {string} 'https://picsum.photos/id/1025/{width}/{height}'
 */
const changeImageUrlSize = (url: string, height: number, width: number) => {
    const arr = url.split('/');
    arr[arr.length - 1] = height;
    arr[arr.length - 2] = width;
    return arr.join('/');
};

export default changeImageUrlSize;