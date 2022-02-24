import HeadNav from "../../components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import ProteinCard from "../../components/ProteinCard";
import { publications } from "../../data/publications.js";
import React, { useEffect, useState } from "react";

function PublicationPage({ articles }) {
  const [listofArticles, changeArticles] = useState([])
  useEffect(() => {
    changeArticles(articles.slice(0,8))
  }, []);
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
