import { useState } from "react"
import {useEffect} from "react"
import {getArticles} from "../../api-get"
import '../../src/Styling/article.css'


export const Articles = () => {
    
const [articleList, setArticleList] = useState([])

useEffect (() => {
    getArticles()
    .then((body) =>{
        setArticleList(body.articles)
    }).catch((err) =>{
        console.error(err)
    })
}, [])
return (
    <div className="articles-container">
        {articleList.map((article) => (
            <div className="article-card" key={article.article_id}>
                <img className="article-image" src={article.article_img_url} alt={article.title} />
                <h2 className="article-title">{article.title}</h2>
                <p className="article-info">Topic: {article.topic}</p>
                <p className="article-info">Votes: {article.votes}</p>
                <a href={article.url} className="read-more-link"  aria-label={`Read more about ${article.title}`}>Read More</a>
            </div>
        ))}
    </div>
);
}

