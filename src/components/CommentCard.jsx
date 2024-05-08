import React from 'react';
import format from 'date-fns/format';
import '../../src/Styling/index.css';

export const CommentCard = ({ comment }) => {
    return (
        <div key={comment.comment_id} className="comment-card">
            <p>{comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Created: {format(new Date(comment.created_at), 'MMMM dd, yyyy')}</p>
        </div>
    );
};