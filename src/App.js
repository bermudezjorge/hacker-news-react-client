import React from "react";

import { Layout } from "components/Layouts";
import Header from "components/Header";
import Tab from "components/Tab";
import Dropdown from "components/Dropdown";
import NewsRenderer from "components/NewsRenderer";

import useSharedState from "hooks/useSharedState";

function App() {
  const { currectOption, handleOption } = useSharedState();

  return (
    <Layout>
      <Header />
      <Tab />
      <Dropdown currectOption={currectOption} handleOption={handleOption} />
      <NewsRenderer query={currectOption.query || "reactjs"} />
    </Layout>
  );
}

export default App;
