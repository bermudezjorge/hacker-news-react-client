import { useState } from "react";

import useLocalStorage from "./useLocalStorage";

const toString = (obj) => JSON.stringify(obj);
const toObj = (obj) => (obj ? JSON.parse(obj) : null);

export default function useFavNews() {
  const [storage, setStorage] = useLocalStorage("favNews");
  const [news, setNews] = useState(toObj(storage) || {});

  const setFavNews = ({ type, newsItem }) => {
    const oldFavNews = { ...news };

    if (type === "add") {
      const newFavNews = { ...oldFavNews, ...newsItem };

      setNews(newFavNews);
      setStorage(toString(newFavNews));
    } else {
      delete oldFavNews[Object.keys(newsItem)[0]];

      setNews(oldFavNews);
      setStorage(toString(oldFavNews));
    }
  };

  return [news, setFavNews];
}
