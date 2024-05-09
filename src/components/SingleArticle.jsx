import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, getComments } from '../../api-get';
import { ArticleCard } from './ArticleCard';
import { CommentCard } from './CommentCard';
import '../../src/Styling/singleArticle.css';
import '../../src/Styling/index.css';

export const SingleArticle = () => {
    const { article_Id } = useParams();
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const [articleLoading, setArticleLoading] = useState(true);
    const [commentsLoading, setCommentsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getArticleById(article_Id)
            .then((data) => {
                setArticle(data);
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to fetch the article.');
            })
            .finally(() => {
                setArticleLoading(false);
            });
    }, [article_Id]);

    useEffect(() => {
        getComments(article_Id)
            .then((data) => {
                setComments(data.article);
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to fetch comments.');
            })
            .finally(() => {
                setCommentsLoading(false);
            });
    }, [article_Id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (articleLoading) {
        return <div>Loading article...</div>;
    }

    if (commentsLoading) {
        return <div>Loading comments...</div>;
    }

    return (
        <>
            {article && <ArticleCard article={article}  setComments={setComments}/>}
            <h2 className="comments-header">Comments</h2>
            <div className="comments-container">
                {comments.map((comment) => (
                    <CommentCard key={comment.comment_id} comment={comment} setComments={setComments}/>
                ))}
            </div>
        </>
    );
};