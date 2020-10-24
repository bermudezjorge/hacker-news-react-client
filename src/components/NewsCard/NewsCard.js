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

export default function NewsCard({ href, isFav }) {
  const [fav, setFav] = useState(isFav || false);
  const [notFirst, setNotFirst] = useState(false);

  const handleFav = () => {
    setFav(!fav);
    setNotFirst(true);
  };

  const effectIfNotFirstAndFav = () => notFirst && fav;

  const ifFavHeart = () => (fav ? heart : unheart);

  return (
    <Card>
      <TextContainerLink href={href} target="_blank" rel="noopener noreferrer">
        <TimeAuthorCon>
          <ClockIcon src={clock} />
          <TimeAuthorText>2 hours ago by author</TimeAuthorText>
        </TimeAuthorCon>
        <CardTitle>
          Event-driven state managment in React using Storeon
        </CardTitle>
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
