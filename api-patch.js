import axios from 'axios';

const newsUrl = axios.create({
    baseURL: 'https://backend-nc-project.onrender.com/api',
});

export const Vote = (articleId, incVotes) => {

    return newsUrl.patch(`/articles/${articleId}`, 
        incVotes
    )
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.error('Error updating vote count:', err);
            throw err;
        });
};
