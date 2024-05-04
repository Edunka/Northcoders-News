import axios from 'axios';
const newsUrl = axios.create({
    baseURL: 'https://backend-nc-project.onrender.com/api',
});

const getArticles = () =>{
    return newsUrl.get(`/articles`)
    .then((res) =>{
        return res.data;
    })
    .catch((err) =>{
        console.error(err)
        throw err;
    })
}

export default getArticles
