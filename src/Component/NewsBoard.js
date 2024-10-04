import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

export default function NewsBoard({ category }) {
  const [news, setNews] = useState([]);
  const key = process.env.REACT_APP_News_Api_Key;
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`
      )
      .then((res) => {
        // console.log(res.data.articles);
        setNews(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  return (
    <>
      <h2 className="text-center">
        Latest <span className="badge bg-danger mt-2">News</span>
      </h2>

      {news.length ? (
        news.map((newsItems, index) => (
          <NewsCard
            key={index}
            title={newsItems.title.slice(0, 50)}
            description={newsItems.description}
            src={newsItems.urlToImage}
            url={newsItems.url}
          />
        ))
      ) : (
        <h1 className="text-center">No News Found</h1>
      )}
    </>
  );
}
