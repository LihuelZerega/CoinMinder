import React, { useEffect, useState } from "react";
import axios from "axios";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

function FinancialNews() {
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "9f8163988bf74660ae59fd475a8497ba";

        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=${apiKey}`
        );

        const articlesWithImages = response.data.articles.filter(
          (article: NewsArticle) => article.urlToImage
        );

        const articlesToShow =
          articlesWithImages.length > 0
            ? articlesWithImages.slice(0, 4)
            : [defaultArticle];

        setNewsData(articlesToShow);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

  const defaultArticle: NewsArticle = {
    title: "No hay noticias disponibles",
    description: "Lo sentimos, no hay noticias disponibles en este momento.",
    url: "#",
    urlToImage: "URL_DE_LA_IMAGEN_POR_DEFECTO",
  };

  return (
    <>
      <section>
        <h1 className="py-6 font-semibold text-2xl">Financial News</h1>
      </section>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {newsData.map((article) => (
          <div key={article.title} className="border p-4 rounded-md">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
            </a>
            <h2 className="text-lg font-semibold">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FinancialNews;
