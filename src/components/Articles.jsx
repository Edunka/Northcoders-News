import { useState} from "react"
import { useEffect } from "react"
import {getArticles} from "../../api-get"

const Articles = () =>{
    
    const [articleList, setArticleList] = useState([])

    useEffect (() => {
        getArticles()
        .then((body) =>{
            setArticleList(body)
        })
        .catch((err) =>{
            console.error(err)
        })
    }, []);

    return (
        <div>
            {articleList.map((article) =>{
                <p key={article.id}>{article.title}</p>
            })}
        </div>
    )
}


export default Articles