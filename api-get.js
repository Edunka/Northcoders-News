import axios from 'axios';

const newsUrl = axios.create({
    baseURL: 'https://backend-nc-project.onrender.com/api',
});

export const getArticles = () => {
    return newsUrl.get('/articles')
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.error(err);
            throw err;
        });
};

export const getArticleById = (article_id) => {
    return newsUrl.get(`/articles/${article_id}`)
        .then((response) => {
            return response.data;
        })
};

export const getComments = (article_id) =>{
    return newsUrl.get(`/articles/${article_id}/comments`)
    .then((response) =>{
        return response.data
    })
}