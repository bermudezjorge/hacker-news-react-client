import { useState } from "react";

import useLocalStorage from "./useLocalStorage";

const defaultOption = { logo: null, title: null };

export default function useSharedState() {
  const [storage, setStorage] = useLocalStorage("filterOption");
  const [currectOption, setCurrectOption] = useState(storage || defaultOption);

  const handleOption = (option) => {
    setCurrectOption(option);
    setStorage(option);
  };

  return { currectOption, handleOption };
}
