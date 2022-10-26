import React, { useEffect, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import NewsCard from "../components/NewsCard";
import useNewsStore, {
  selectFetchNews,
  selectIsLoading,
  selectNews,
  selectSearchNews,
} from "../apis/news";

export default function NewsPage() {
  const fetchNews = useNewsStore(selectFetchNews);
  const searchNews = useNewsStore(selectSearchNews);
  const newsIsLoading = useNewsStore(selectIsLoading);
  const news = useNewsStore(selectNews);

  useEffect(() => {
    document.title = "News Page";
    fetchNews();
    // console.log("from home");
    // console.log(news);
  }, [fetchNews]);

  const [isSearching, setIsSearching] = useState(false);
  const [keys, setKeys] = useState("");

  const txtKeysOnChangeHandler = (e) => {
    setKeys(e.target.value);
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();
    console.log("searching....");
    console.log(e.target.keys.value);

    setIsSearching(true);
    searchNews(e.target.keys.value);
  };

  const btnClearClickHandler = (e) => {
    console.log("clearing");

    setKeys("");
    setIsSearching(false);
    fetchNews();
  };

  return (
    <>
      <MyNavbar />
      {/*Container*/}
      <div className="container w-full mx-auto pt-20">
        <div className="flex flex-row justify-between flex-wrap mb-4">
          <div className="text-black mt-1 ml-2 lg:left-2 relative md:left-0 left-28 font-extrabold text-3xl md:text-5xl">
            <p>{isSearching ? "Hasil Pencarian" : "Berita Terkini"}</p>
          </div>
          <div className="relative w-full max-w-3xl md:right-10 px-2 left-10 flex flex-row mr-2">
            <form action="#" onSubmit={submitSearchHandler}>
              <input
                id="search-toggle"
                name="keys"
                type="search"
                placeholder="search"
                className="inline-flex absolute md:relative md:left-[350px] md:top-4 lg:top-3 top-1 sm:right-[500] bg-gray-200 focus:outline-none focus:bg-white focus:shadow-md text-gray-700 font-bold rounded-md pl-12 pr-4 py-3"
                value={keys}
                onChange={txtKeysOnChangeHandler}
              />
            </form>
            <button
              className="bg-transparent relative ml-2 mt-2 left-72 md:left-[350px] lg:left-[420px] lg:bottom-16 md:left-[450px] md:top-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={btnClearClickHandler}
            >
              X
            </button>
          </div>

          {/* <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={btnLogClickHandler}>
            log
          </button> */}
        </div>

        <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          <div className="flex flex-row ml-2 flex-wrap ">
            {newsIsLoading
              ? "Loading ..."
              : news.map((item, index) =>
                  isSearching ? (
                    <NewsCard
                      photo={
                        "https://static01.nyt.com/" + item?.multimedia[1]?.url
                      }
                      title={item.headline?.main}
                      section={item.section_name}
                      subsection={item.subsection_name}
                      url={item.web_url}
                      abstract={item.abstract}
                      key={item.title}
                      myKey={item.title}
                    />
                  ) : (
                    <NewsCard
                      photo={item.multimedia[1].url}
                      title={item.title}
                      section={item.section}
                      subsection={item.subsection}
                      url={item.url}
                      abstract={item.abstract}
                      key={item.title}
                      myKey={item.title}
                    />
                  )
                )}
          </div>
        </div>
      </div>
      {/*/container*/}
    </>
  );
}
