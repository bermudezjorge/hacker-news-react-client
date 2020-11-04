import React, { useState, useEffect } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import axios from "axios";

import { LayoutWidth } from "../Layouts";
import Loader from "../Loader";
import NewsCard from "../NewsCard";

const NUM_COLUMNS = 2;
let itemsIndex = 0;

export default function News({ query }) {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    //reset items
    itemsIndex = 0;
    setItems({});
  }, [query]);

  function loadMoreItems() {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);

    axios(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}`
    ).then((res) => {
      const news = res.data.hits;
      const newItems = {};

      news.forEach(({ story_url, created_at, author, story_title }) => {
        newItems[itemsIndex++] = {
          story_url,
          created_at,
          author,
          story_title,
        };
      });

      setLoading(false);
      setItems({ ...items, ...newItems });
    });
  }

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const itemIndex = rowIndex * NUM_COLUMNS + columnIndex;

    const currentData = items[itemIndex];

    if (loading) {
      return <Loader style={style} />;
    } else {
      return <NewsCard style={style} data={currentData} />;
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
