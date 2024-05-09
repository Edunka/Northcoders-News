import axios from 'axios';

const newsUrl = axios.create({
    baseURL: 'https://backend-nc-project.onrender.com/api',
});

export const deleteComment = (comment_id) => {
    return newsUrl.delete(`/comments/${comment_id}`)
        .then((response) => {
            return response
        })
        .catch((err) => {
            console.error(err);
            throw err;
        });
};