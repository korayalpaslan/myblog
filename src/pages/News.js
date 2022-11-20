import React, { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   const day = new Date().getDate();
  //   const month = new Date().getMonth() + 1;
  //   const year = new Date().getFullYear();

  const fetchNewsHandler = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=holiday&from=2022-11-20&sortBy=publishedAt&apiKey=28d8a77e406f4040b75e2b6ca37a07b6`
      );

      if (!response.ok) {
        throw new Error("Beklenmeyen bir sorun oluştu!");
      }

      const data = await response.json();
      setNews(data.articles.slice(0, 10));
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsHandler();
  }, []);

  console.log(news);

  return (
    <div className="container">
      <div className="news">
        <h3>Günün Seyahat Haberleri</h3>
        {isLoading && <p>Loading</p>}
        {!isLoading && (
          <div className="card__container">
            {news.map((newsItem, index) => {
              return (
                <article key={index} className="card__item">
                  <div className="card__image">
                    <img src={newsItem.urlToImage ? newsItem.urlToImage : require(`../assets/news.jpg`)} alt={newsItem.source.name} />
                  </div>
                  <div className="card__text">
                    <h4>{newsItem.title}</h4>
                    <p>
                      {newsItem.description}&nbsp;
                      <a href={newsItem.url}>more detais</a>
                    </p>
                    <div className="source">
                      <span>Kaynak:&nbsp;</span>
                      <span>{newsItem.source.name}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
