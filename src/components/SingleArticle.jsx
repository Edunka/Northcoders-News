import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../../api-get";
import '../../src/Styling/singleArticle.css';
import format from 'date-fns/format';
export const SingleArticle = () => {
    const { article_Id } = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getArticleById(article_Id)
            .then((data) => {
                setArticle(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch the article.");
                setIsLoading(false);
            });
    }, [article_Id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div key={article.article_id} className="single-article-card">
            <img className="single-article-image" src={article.article.article_img_url} alt={article.article.title} />
            <h2 className="single-article-title">{article.article.title}</h2>
            <p className="single-article-info">Topic: {article.article.topic}</p>
            <p className="single-article-info">Votes: {article.article.votes}</p>
            <p className="single-article-info">Comments: {article.article.comment_count}</p>
            <p className="single-article-info">Created: {format(new Date(article.article.created_at), 'MMMM dd, yyyy')}</p>
        </div>
    );
};
