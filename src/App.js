import React from "react";

import { Layout } from "components/Layouts";
import Header from "components/Header";
import Tab from "components/Tab";
import Dropdown from "components/Dropdown";
import NewsRenderer from "components/NewsRenderer";

function App() {
  return (
    <Layout>
      <Header />
      <Tab />
      <Dropdown />
      <NewsRenderer />
    </Layout>
  );
}

export default App;
