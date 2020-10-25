import React from "react";

import { LayoutWidth, LayoutNews } from "../Layouts";
import NewsCard from "../NewsCard";

import useNews from "hooks/useNews";

export default function NewsRenderer() {
  const { news, isLoading, isError, setSize } = useNews("reactjs");

  return (
    <LayoutWidth>
      <LayoutNews>
        {news.map((data) => (
          <NewsCard key={data.create_at} isFav={false} data={data} />
        ))}
      </LayoutNews>
    </LayoutWidth>
  );
}
