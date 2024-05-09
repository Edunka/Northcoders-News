import React, { useState } from 'react';
import { deleteComment } from '../../api-delete';

export const DeleteComment = ({ comment_id, commentUsername, setComments }) => {
    const [loading, setLoading] = useState(false);
    
    const hardcodedUsername = 'weegembump';

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
        commentUsername === hardcodedUsername && (
            <button onClick={handleCommentDelete} disabled={loading}>
                {loading ? 'Deleting...' : 'X'}
            </button>
        )
    );
};
