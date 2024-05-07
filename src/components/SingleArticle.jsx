import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, getComments } from "../../api-get";
import '../../src/Styling/singleArticle.css';
import '../../src/Styling/index.css'
import format from 'date-fns/format';
export const SingleArticle = () => {
    const { article_Id } = useParams();
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([])
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

    useEffect(() => {
        getComments(article_Id, {sortBy: 'created_at', order: 'desc'})
            .then((data) => {
                setComments(data.article);
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
    if(!comments){
        return <div>Comments not found</div>
    }

    return (
        <>
        <div key={article.article_id} className="single-article-container">
            <div className="single-article-card">
            <img className="single-article-image" src={article.article.article_img_url} alt={article.article.title} />
            <h2 className="single-article-title">{article.article.title}</h2>
            <h3 className="single-article-info">{article.article.body}</h3>
            <p className="single-article-info">Topic: {article.article.topic}</p>
            <p className="single-article-info">Author: {article.article.author}</p>
            <p className="single-article-info">Votes: {article.article.votes}</p>
            <p className="single-article-info">Comments: {article.article.comment_count}</p>
            <p className="single-article-info">Created: {format(new Date(article.article.created_at), 'MMMM dd, yyyy')}</p>
            </div>
            <div></div>
        </div>
        <h2 className="comments-header">Comments</h2>
         <div className="comments-container">
            
            {comments.map((comment) => (
            <div key={comment.comment_id} className="comment-card">
                <p>{comment.body}</p>
                <p>Author: {comment.author}</p>
                <p>Created: {format(new Date(comment.created_at), 'MMMM dd, yyyy')}</p>
            </div>
        ))}
    </div>

        </>
    );
};
