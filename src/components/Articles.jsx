import { useState, useEffect } from "react";
import { getArticles } from "../../api-get";
import '../../src/Styling/article.css';
import format from 'date-fns/format';
import { Link } from "react-router-dom"

export const Articles = () => {
    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles({sortBy: 'created_at', order: 'desc'})
            .then((articles) => {
                setArticleList(articles.articles);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
        <div className="articles-container">
            {isLoading ? (
                <div>Loading articles...</div>
            ) : (
                articleList.map((article) => (
                    <div key={article.article_id} className="article-card" aria-label={`Read more about ${article.title}`}>
                        <Link to={`${article.article_id}`}>
                            <img className="article-image" src={article.article_img_url} alt={article.title} />
                            <h2 className="article-title">{article.title}</h2>
                        </Link>
                        <p className="article-info">Topic: {article.topic}</p>
                        <p className="article-info">Votes: {article.votes}</p>
                        <p className="article-info">Comments: {article.comment_count}</p>
                        <p className="article-info">Created: {format(new Date(article.created_at), 'MMMM dd, yyyy')}</p>
                    </div>
                ))
            )}
        </div>
        </>
    );
};
