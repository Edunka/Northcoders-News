import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getTopics, getFilteredTopics } from "../../api-get";
import '../../src/Styling/index.css';
import '../../src/Styling/singleArticle.css';
import format from 'date-fns/format';

export const Topics = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedTopic, setSelectedTopic] = useState("");
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        getTopics().then(result => {
            setTopics(result.topics);
            setIsLoading(false);
        }).catch(err => {
            console.error(err);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        const topicFromUrl = searchParams.get("topic");
        if (topicFromUrl) {
            setSelectedTopic(topicFromUrl);
            getFilteredTopics(topicFromUrl).then(response => {
                setFilteredArticles(response.articles);
            }).catch(err => {
                console.error(err);
            });
        }
    }, [searchParams]);

    const handleSelectChange = (event) => {
        const topic = event.target.value;
        setSelectedTopic(topic);
        setSearchParams({ topic });
        getFilteredTopics(topic).then(response => {
            setFilteredArticles(response.articles);
        }).catch(err => {
            console.error(err);
        });
    };

    return (
        <div>
            {isLoading ? (
                <div>Loading Topics...</div>
            ) : (
                <div className="selectForFilteredTopics">
                    <select value={selectedTopic} onChange={handleSelectChange}>
                        {topics.map((topic) => (
                            <option key={topic.slug} value={topic.slug}>
                                {topic.slug}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {filteredArticles.length > 0 ? (
                <div>
                    <h2 className="articles-title-topics">Articles:</h2>
                    {filteredArticles.map((article) => (
                        <div key={article.article_id} className="single-article-container">
                            <div className="single-article-card">
                                <img className="single-article-image" src={article.article_img_url} alt={article.title} />
                                <h2 className="single-article-title">{article.title}</h2>
                                <h3 className="single-article-info">{article.body}</h3>
                                <p className="single-article-info">Topic: {article.topic}</p>
                                <p className="single-article-info">Author: {article.author}</p>
                                <p className="single-article-info">Comments: {article.comment_count}</p>
                                <p className="single-article-info">Created: {format(new Date(article.created_at), 'MMMM dd, yyyy')}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                selectedTopic && (
                    <div>
                        <p>No articles found for the selected topic.</p>
                    </div>
                )
            )}
        </div>
    );
};
