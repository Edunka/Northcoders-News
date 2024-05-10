import React, { useState, useContext } from 'react';
import { postComment } from '../../api-post';
import '../Styling/Addcomment.css'
import { UserNameContext } from '../contexts/userName';

export const AddComment = ({ articleId, setComments }) => {
    const [loading, setLoading] = useState(false);

    const { userName } = useContext(UserNameContext);

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        const form = event.target;
        const body = form.elements.body.value;
        const username = form.elements.username.value;
        const comment = {
            username,
            body,
        };

        postComment(articleId, comment)
            .then((response) => {
                form.reset();
                setComments((current) =>{
                    return [ response.comment, ...current]
                })
                
            })
            .catch((err) => {
                console.error(`Error adding comment:`, err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="add-comment-container">
            <h3>Add a Comment</h3>
            <form className="add-comment-form" onSubmit={handleCommentSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userName}
                        readOnly
                    />
                </div>

                <div>
                    <label htmlFor="body">Comment:</label>
                    <textarea
                        name="body"
                        required
                        disabled={loading}
                    />
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Comment'}
                </button>
            </form>
        </div>
    );
};
