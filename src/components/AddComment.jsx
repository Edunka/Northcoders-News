import React, { useState } from 'react';
import { PostComment } from '../../api-post';
import '../Styling/Addcomment.css'
export const AddComment = ({ articleId }) => {
    const [loading, setLoading] = useState(false);

    const username = 'weegembump';

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        const form = event.target;
        const body = form.elements.body.value;

        const comment = {
            username,
            body,
        };

        PostComment(articleId, comment)
            .then((response) => {
                window.location.reload();
                form.reset();
                return response.data
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
                        value={username}
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
