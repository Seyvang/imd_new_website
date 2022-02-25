import HeadNav from "../../components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import ProteinCard from "../../components/ProteinCard";
import { publications } from "../../data/publications.js";
import React, { useReducer, useEffect } from "react";

function PublicationPage({ articles }) {

  const SHORTEN_ARTICLES = "SHORTEN_ARTICLES"
  const reduce_articles = {
    type: SHORTEN_ARTICLES,
    startArticle: 0,
    endArticle: 8
  }
  const articleReducer = (state=articles, action) => {
    switch(action.type){
      case "SHORTEN_ARTICLES":
        return state.slice(action.startArticle, action.endArticle)
    }
  }
  const [listofArticles, dispatch] = useReducer(articleReducer, articles)
  useEffect(()=>(
    dispatch(reduce_articles)
  ), [])
  

  return (
    <>
      <Container id="start" className="justify-content-center">
        { listofArticles.map((article) => {
          return <div key={article.id}>
            <h3><a href={article.link} className="text-cyan800">{article.title}</a> </h3>
            <h4>{article.authors}</h4>
            <p>{article.year}. {article.other}</p>
            <br></br>
          </div>;
        })}
      </Container>
    </>
  );
}
export default PublicationPage;

export async function getStaticProps() {
  return {
    props: {
      articles: publications,
    },
  };
}
