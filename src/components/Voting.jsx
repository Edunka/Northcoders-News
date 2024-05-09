import React, { useState } from 'react';
import { Vote } from '../../api-patch';

export const Voting = ({ articleId, initialVoteCount }) => {

    const [voteCount, setVoteCount] = useState(Number(initialVoteCount));


    const handleVote = (voteChange) => {
        setVoteCount((prevVoteCount) => prevVoteCount + voteChange);

        Vote(articleId, { inc_votes: voteChange,
            article_id: articleId
        })
            .then((response) => {               
                setVoteCount(response.vote);
            })
            .catch((err) => {
                console.error('Error updating vote:', err);

                setVoteCount((prevVoteCount) => prevVoteCount - voteChange);
            });
    };

    return (
        <div>
            <button onClick={() => handleVote(-1)}>-</button>
            <p>Votes:{voteCount}</p>
            <button onClick={() => handleVote(1)}>+</button>
            
        </div>
    );
};
