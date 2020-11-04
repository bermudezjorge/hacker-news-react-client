import React, { useState, useEffect } from "react";
import { FixedSizeGrid as Grid } from "react-window";

import useFavNews from "hooks/useFavNews";

import { LayoutWidth } from "../Layouts";
import NewsCard from "../NewsCard";

import { NoNews } from "./styles";

const NUM_COLUMNS = 2;

export default function FavNews() {
  const [favNews] = useFavNews();
  const [items, setItems] = useState({});
  const [itemsArr, setItemsArr] = useState([]);

  useEffect(() => {
    setItems(favNews);
    setItemsArr(Object.values(items));
  }, [favNews, items]);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const itemIndex = rowIndex * NUM_COLUMNS + columnIndex;

    const currentData = itemsArr[itemIndex];

    return <NewsCard style={style} data={currentData} />;
  };

  if (!!Object.keys(items).length) {
    return (
      <LayoutWidth>
        <Grid
          width={1024}
          height={452}
          columnCount={NUM_COLUMNS}
          columnWidth={490}
          rowCount={itemsArr.length}
          rowHeight={90}
        >
          {Cell}
        </Grid>
      </LayoutWidth>
    );
  } else {
    return <NoNews>No favorite news.</NoNews>;
  }
}
