import React from 'react';
import format from 'date-fns/format';
import '../../src/Styling/singleArticle.css';
import { Voting } from './Voting';
import { AddComment } from './AddComment';
export const ArticleCard = ({ article, setComments}) => {
    return (
        <div key={article.article_id} className="single-article-container">
            <div className="single-article-card">
                <img className="single-article-image" src={article.article.article_img_url} alt={article.title} />
                <h2 className="single-article-title">{article.article.title}</h2>
                <h3 className="single-article-info">{article.article.body}</h3>
                <p className="single-article-info">Topic: {article.article.topic}</p>
                <p className="single-article-info">Author: {article.article.author}</p>
                <p className="single-article-info">Comments: {article.article.comment_count}</p>
                <p className="single-article-info">Created: {format(new Date(article.article.created_at), 'MMMM dd, yyyy')}</p>

                <Voting articleId={article.article.article_id} initialVoteCount={article.article.votes} />
                <AddComment articleId={article.article.article_id} setComments={setComments}></AddComment>
            </div>
        </div>
    );
};