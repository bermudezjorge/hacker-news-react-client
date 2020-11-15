import React, { useState, useEffect } from "react";
import { FixedSizeGrid as Grid, FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import axios from "axios";

import useResponsive from "hooks/useResponsive";

import { LayoutWidth } from "../Layouts";
import Loader from "../Loader";
import NewsCard from "../NewsCard";

const MOBILE_WIDTH = window.innerWidth;
const NUM_COLUMNS = 2;
let itemsIndex = 0;

export default function News({ query, favNews, saveFavNews }) {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const isMobile = useResponsive();

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

  const Row = ({ index, style }) => {
    if (loading) {
      return <Loader style={style} />;
    } else {
      return (
        <NewsCard
          style={style}
          data={items[index]}
          isFav={favNews.hasOwnProperty(`${items[index]?.created_at}`)}
          saveFavNews={saveFavNews}
        />
      );
    }
  };

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const itemIndex = rowIndex * NUM_COLUMNS + columnIndex;

    const currentData = items[itemIndex];

    if (loading) {
      return <Loader style={style} />;
    } else {
      return (
        <NewsCard
          style={style}
          data={currentData}
          isFav={favNews.hasOwnProperty(`${currentData?.created_at}`)}
          saveFavNews={saveFavNews}
        />
      );
    }
  };

  return (
    <LayoutWidth>
      {isMobile ? (
        <InfiniteLoader
          isItemLoaded={(index) => !!items[index]}
          itemCount={Object.keys(items).length + 1}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <List
              height={300}
              itemCount={Object.keys(items).length + 1}
              itemSize={90}
              width={MOBILE_WIDTH}
              onItemsRendered={onItemsRendered}
              ref={ref}
            >
              {Row}
            </List>
          )}
        </InfiniteLoader>
      ) : (
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
                  overscanStopIndex:
                    gridProps.overscanRowStopIndex * NUM_COLUMNS,
                  visibleStartIndex:
                    gridProps.visibleRowStartIndex * NUM_COLUMNS,
                  visibleStopIndex: gridProps.visibleRowStopIndex * NUM_COLUMNS,
                });
              }}
              ref={ref}
            >
              {Cell}
            </Grid>
          )}
        </InfiniteLoader>
      )}
    </LayoutWidth>
  );
}
