import React from 'react';
import format from 'date-fns/format';
import '../../src/Styling/index.css';
import { DeleteComment } from './DeleteComment';
export const CommentCard = ({ comment, setComments }) => {

    return (
        <div key={comment.comment_id} className="comment-card">
            <DeleteComment comment_id={comment.comment_id} commentUsername={comment.author} setComments={setComments}></DeleteComment>
            <p>{comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Created: {format(new Date(comment.created_at), 'MMMM dd, yyyy')}</p>
        </div>
    );
};