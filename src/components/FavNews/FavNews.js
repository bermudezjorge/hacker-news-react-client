import React, { useState, useEffect } from "react";
import { FixedSizeGrid as Grid, FixedSizeList as List } from "react-window";

import useResponsive from "hooks/useResponsive";

import { LayoutWidth } from "../Layouts";
import NewsCard from "../NewsCard";

import { NoNews } from "./styles";

const MOBILE_WIDTH = window.innerWidth;
const NUM_COLUMNS = 2;

export default function FavNews({ favNews, saveFavNews }) {
  const [items, setItems] = useState([]);
  const isMobile = useResponsive();

  useEffect(() => {
    setItems(Object.values(favNews));
  }, [favNews]);

  const Row = ({ index, style }) => (
    <NewsCard
      style={style}
      data={items[index]}
      isFav={true}
      saveFavNews={saveFavNews}
    />
  );

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const itemIndex = rowIndex * NUM_COLUMNS + columnIndex;

    const currentData = items[itemIndex];

    return (
      <NewsCard
        style={style}
        data={currentData}
        isFav={true}
        saveFavNews={saveFavNews}
      />
    );
  };

  if (!!items.length) {
    return (
      <LayoutWidth>
        {isMobile ? (
          <List
            height={300}
            itemCount={items.length}
            itemSize={90}
            width={MOBILE_WIDTH}
          >
            {Row}
          </List>
        ) : (
          <Grid
            width={1024}
            height={452}
            columnCount={NUM_COLUMNS}
            columnWidth={490}
            rowCount={items.length === 1 ? items.length : items.length - 1}
            rowHeight={90}
          >
            {Cell}
          </Grid>
        )}
      </LayoutWidth>
    );
  } else {
    return <NoNews>No favorite news.</NoNews>;
  }
}
