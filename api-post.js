import axios from 'axios';

const newsUrl = axios.create({
    baseURL: 'https://backend-nc-project.onrender.com/api',
});

export const PostComment = (artileId, newComment) =>{
    return newsUrl.post(`/articles/${artileId}/comments`,
        newComment
    ).then((response) =>{
        return response.data
    })
    .catch((err) =>{
        console.error('Error adding a comment:', err);
        throw err;
    })
}