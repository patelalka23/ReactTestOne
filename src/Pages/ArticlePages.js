import react from "react";
import { useParams } from 'react-router-dom'
import ArticleList from "../Components/ArticleList";
import ArticleContent from "./ArticleContent";


const ArticlePages = () => {
    const { name } = useParams();
    const article = ArticleContent.find(article => article.name === name)
    if (!article) return <h1>Article does not Exist !!!!</h1>
    const otherArticles=ArticleContent.filter(article => article.name !== name)
    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <ArticleList articles={otherArticles} />
        </>

    );
}

export default ArticlePages;