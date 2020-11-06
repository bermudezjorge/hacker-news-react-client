import React from "react";
import { Route } from "wouter";

import useFavNews from "hooks/useFavNews";

import { Layout } from "components/Layouts";
import Header from "components/Header";
import Tab from "components/Tab";
import Dropdown from "components/Dropdown";
import News from "components/News";
import FavNews from "components/FavNews";

import useSharedState from "hooks/useSharedState";

function App() {
  const { favNews, saveFavNews } = useFavNews();
  const { currectOption, handleOption } = useSharedState();

  return (
    <Layout>
      <Header />
      <Tab />
      <Route path="/">
        {() => (
          <>
            <Dropdown
              currectOption={currectOption}
              handleOption={handleOption}
            />
            <News
              query={currectOption.query || "reactjs"}
              favNews={favNews}
              saveFavNews={saveFavNews}
            />
          </>
        )}
      </Route>
      <Route path="/fav-news">
        {() => <FavNews favNews={favNews} saveFavNews={saveFavNews} />}
      </Route>
    </Layout>
  );
}

export default App;
