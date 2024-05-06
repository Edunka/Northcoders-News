import express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
app.use(cors());

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

app.get('/articles', (req, res) => {
    getArticles()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.error("Error fetching articles:", err);
            res.status(500).json({ error: "Failed to fetch articles" });
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
