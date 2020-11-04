import React from "react";
import { Route } from "wouter";

import { Layout } from "components/Layouts";
import Header from "components/Header";
import Tab from "components/Tab";
import Dropdown from "components/Dropdown";
import News from "components/News";
import FavNews from "components/FavNews";

import useSharedState from "hooks/useSharedState";

function App() {
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
            <News query={currectOption.query || "reactjs"} />
          </>
        )}
      </Route>
      <Route path="/fav-news" component={FavNews} />
    </Layout>
  );
}

export default App;
