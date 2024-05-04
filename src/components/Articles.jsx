import { useState, useEffect} from "react"
import getArticles from "../../api-get"

export const Articles = () => {
    
    const [articleList, setArticleList] = useState([])

    useEffect (() => {
        getArticles()
        .then((body) =>{
            console.log(body)
            setArticleList(body)
            console.log(body)
        })
        .catch((err) =>{
            console.error(err)
        })
    }, [])

    return (
        <div>
            {articleList.map((article) =>{
                <p>{article}</p>
                console.log('article', article)
            })}
        </div>
    )
}
