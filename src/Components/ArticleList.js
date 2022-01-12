import react from "react";
import { Link } from "react-router-dom";

// import ArticleListPage from "../Pages/ArticleListPage";

const ArticleList = ({articles}) =>{
    return(
        <>
            {
                articles.map(article => (
                    <Link className="article-list-item" to={`/article/${article.name}`}>
                        <h5>{article.title}</h5>
                        <p>{article.content[0].substring(0,150)}...</p>
                        
                    </Link>
                ))
            }
        </>
    )
    
}

export default ArticleList;