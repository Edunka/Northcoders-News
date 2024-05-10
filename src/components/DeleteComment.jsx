import React, { useState, useContext } from 'react';
import { deleteComment } from '../../api-delete';
import { UserNameContext } from '../contexts/userName';
export const DeleteComment = ({ comment_id, commentUsername, setComments }) => {
    const [loading, setLoading] = useState(false);
    
    const { userName } = useContext(UserNameContext);
    const handleCommentDelete = (event) => {
        event.preventDefault();
        setLoading(true);

        deleteComment(comment_id)
            .then(() => {
                setComments((currentComments) =>{
                    return currentComments.filter(comment => comment.comment_id !== comment_id)
                })
                
            })
            .catch((err) => {
                console.error('Error deleting comment:', err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        commentUsername === userName && (
            <button onClick={handleCommentDelete} disabled={loading}>
                {loading ? 'Deleting...' : 'X'}
            </button>
        )
    );
};
