import react from "react";

import ArticleContent from "./ArticleContent";
import ArticleList from "../Components/ArticleList"


const ArticleListPage = () =>{
    return(
        <>
        <h1>Article</h1>
        <br/>
        <ArticleList articles={ArticleContent}/>
        </>
    );
}

export default ArticleListPage