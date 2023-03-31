import React from "react";
import "./article.css";

const Article = ({ image, date, title }) => {
  return (
    <article className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={image} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div className="gpt3__blog-container_article-content_heading">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </article>
  );
};

export default Article;
