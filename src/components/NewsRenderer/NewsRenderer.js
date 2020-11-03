import React, { useState } from "react";
import axios from "axios";
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import { LayoutWidth } from "../Layouts";
import NewsCard from "../NewsCard";

const NUM_COLUMNS = 2;

export default function NewsRenderer({ query }) {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  function loadMoreItems() {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);

    axios(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`
    ).then((res) => {
      const news = res.data.hits;
      const newItems = {};

      news.forEach(({ story_url, created_at, author, story_title }, index) => {
        newItems[index] = {
          story_url,
          created_at,
          author,
          story_title,
        };
      });

      setLoading(false);
      setItems({ ...items, ...newItems });
      console.log(Object.keys(items).length + 1);
    });
  }

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const itemIndex = rowIndex * NUM_COLUMNS + columnIndex;

    if (loading) {
      return <h1 style={style}>Loading...</h1>;
    } else {
      return <NewsCard style={style} isFav={false} data={items[itemIndex]} />;
    }
  };

  return (
    <LayoutWidth>
      <InfiniteLoader
        isItemLoaded={(index) => !!items[index]}
        itemCount={Object.keys(items).length + 1}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <Grid
            width={1024}
            height={452}
            columnCount={NUM_COLUMNS}
            columnWidth={490}
            rowCount={Object.keys(items).length + 1}
            rowHeight={90}
            onItemsRendered={(gridProps) => {
              onItemsRendered({
                overscanStartIndex:
                  gridProps.overscanRowStartIndex * NUM_COLUMNS,
                overscanStopIndex: gridProps.overscanRowStopIndex * NUM_COLUMNS,
                visibleStartIndex: gridProps.visibleRowStartIndex * NUM_COLUMNS,
                visibleStopIndex: gridProps.visibleRowStopIndex * NUM_COLUMNS,
              });
            }}
            ref={ref}
          >
            {Cell}
          </Grid>
        )}
      </InfiniteLoader>
    </LayoutWidth>
  );
}
