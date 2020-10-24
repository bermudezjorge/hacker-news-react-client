import React from "react";

import { LayoutWidth, LayoutNews } from "../Layouts";
import NewsCard from "../NewsCard";

import useNews from "hooks/useNews";

export default function NewsRenderer() {
  const { data, isLoading, isError, setSize } = useNews("react");

  const news = data ? [].concat(...data) : [];
  return (
    <LayoutWidth>
      <LayoutNews>
        {news.map((newsData) => {
          <NewsCard isFav={false} />;
        })}
      </LayoutNews>
    </LayoutWidth>
  );
}
