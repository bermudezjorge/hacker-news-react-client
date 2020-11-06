import { useState } from "react";

import useLocalStorage from "./useLocalStorage";

const toString = (obj) => JSON.stringify(obj);
const toObj = (obj) => (obj ? JSON.parse(obj) : null);

export default function useFavNews() {
  const [storage, setStorage] = useLocalStorage("favNews");
  const [favNews, setFavNews] = useState(toObj(storage) || {});

  const saveFavNews = ({ type, newsItem }) => {
    if (type === "add") {
      const newFavNews = { ...favNews, ...newsItem };

      setStorage(toString(newFavNews));
      setFavNews(newFavNews);
    } else {
      let oldFavNews = { ...favNews };

      delete oldFavNews[Object.keys(newsItem)[0]];

      setStorage(toString(oldFavNews));
      setFavNews(oldFavNews);
    }
  };

  return { favNews, saveFavNews };
}
