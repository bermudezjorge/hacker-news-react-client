import React, { useState } from "react";

import {
  Card,
  TextContainerLink,
  TimeAuthorCon,
  ClockIcon,
  TimeAuthorText,
  CardTitle,
  FavCon,
  FavIcon,
} from "./styles";

import clock from "assets/icon/clock.svg";
import heart from "assets/icon/heart.svg";
import unheart from "assets/icon/heart-outline.svg";

export default function NewsCard({ data, isFav }) {
  const [fav, setFav] = useState(isFav || false);
  const [notFirst, setNotFirst] = useState(false);

  const handleFav = () => {
    setFav(!fav);
    setNotFirst(true);
  };

  const effectIfNotFirstAndFav = () => notFirst && fav;

  const ifFavHeart = () => (fav ? heart : unheart);

  const hoursDiff = () => {
    const createdTime = Date.parse(data.created_at);

    const currectTime = Date.parse(new Date());

    const diff = (currectTime - createdTime) / 3600000;

    const diffInHours = (diff * 60) / 60;

    if (diffInHours >= 60) {
      //return hours
      return Math.floor(diffInHours) + "hours";
    } else {
      //return mins
      return (diffInHours.toFixed(2) + "").split(".")[1] + "mins";
    }
  };

  return (
    <Card>
      <TextContainerLink
        href={data.story_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TimeAuthorCon>
          <ClockIcon src={clock} />
          <TimeAuthorText>
            {hoursDiff()} ago by {data.author}
          </TimeAuthorText>
        </TimeAuthorCon>
        <CardTitle>{data.story_title || "No title"}</CardTitle>
      </TextContainerLink>
      <FavCon onClick={() => handleFav()}>
        <FavIcon
          hearted={effectIfNotFirstAndFav()}
          src={ifFavHeart()}
          alt="icon"
        />
      </FavCon>
    </Card>
  );
}
