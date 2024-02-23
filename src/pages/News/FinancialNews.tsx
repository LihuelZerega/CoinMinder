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
  const [visibleNewsCount, setVisibleNewsCount] = useState(18);

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
            ? articlesWithImages.slice(0, visibleNewsCount)
            : [defaultArticle];

        setNewsData(articlesToShow);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, [visibleNewsCount]);

  const defaultArticle: NewsArticle = {
    title: "No hay noticias disponibles",
    description: "Lo sentimos, no hay noticias disponibles en este momento.",
    url: "#",
    urlToImage: "URL_DE_LA_IMAGEN_POR_DEFECTO",
  };

  const firstNew = newsData.slice(0, 1);
  const secondNew = newsData.slice(1, 2);
  const thirdNew = newsData.slice(2, 3);
  const quarterNew = newsData.slice(3, 4);
  const fifthNew = newsData.slice(4, 5);
  const remainingNews = newsData.slice(6);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <section className="flex flex-col w-full lg:w-1/3 gap-8">
          <div>
            {firstNew.map((article) => (
              <div key={article.title} className="border p-4 rounded-md">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-96 object-cover rounded-md mb-2"
                  />
                </a>
                <h2 className="text-lg font-semibold">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h2>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col w-full lg:w-2/3 gap-4">
          <div className="flex">
            {secondNew.map((article) => (
              <div key={article.title} className="border p-4 rounded-md">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center"
                >
                  <div>
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="md:min-w-[96px] md:min-h-[96px] md:max-w-[96px] md:max-h-[96px] object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-start mt-4 md:ml-6 md:mt-0">
                    <h2 className="text-lg font-semibold">{article.title}</h2>
                    <p className="text-sm">{article.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="flex">
            {thirdNew.map((article) => (
              <div key={article.title} className="border p-4 rounded-md">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center"
                >
                  <div>
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="md:min-w-[96px] md:min-h-[96px] md:max-w-[96px] md:max-h-[96px] object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-start mt-4 md:ml-6 md:mt-0">
                    <h2 className="text-lg font-semibold">{article.title}</h2>
                    <p className="text-sm">{article.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="flex">
            {quarterNew.map((article) => (
              <div key={article.title} className="border p-4 rounded-md">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center"
                >
                  <div>
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="md:min-w-[96px] md:min-h-[96px] md:max-w-[96px] md:max-h-[96px] object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-start mt-4 md:ml-6 md:mt-0">
                    <h2 className="text-lg font-semibold">{article.title}</h2>
                    <p className="text-sm">{article.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="flex">
            {fifthNew.map((article) => (
              <div key={article.title} className="border p-4 rounded-md">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center"
                >
                  <div>
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="md:min-w-[96px] md:min-h-[96px] md:max-w-[96px] md:max-h-[96px] object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-start mt-4 md:ml-6 md:mt-0">
                    <h2 className="text-lg font-semibold">{article.title}</h2>
                    <p className="text-sm">{article.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="flex flex-col gap-8">
        {remainingNews.length > 0 && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {remainingNews.map((article, index) => (
              <div key={article.title} className="border p-4 rounded-md">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-40 object-cover rounded-md mb-2"
                  />
                </a>
                <h2 className="text-lg font-semibold">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {article.title}
                  </a>
                </h2>
                <p>{article.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FinancialNews;