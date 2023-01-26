import React, { useState, useEffect, useMemo } from "react";

import Data from "../data.json";

const SalesContext = React.createContext();

export const SalesProviders = (props) => {
  const data = Data;
  const [view, setView] = useState("");

  console.log("soy la data", data);

  const getDataLocalStorage = () => {
    return JSON.parse(localStorage.getItem("bold"));
  };

  const setLocalStorage = (data) => {
    localStorage.setItem("bold", JSON.stringify(data));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setStateView = (view) => {
    const dataLocalStorage = getDataLocalStorage();
    dataLocalStorage.view = view;
    setView(view);
    setLocalStorage(dataLocalStorage);
  };

  useEffect(() => {
    const dataLocalStorage = getDataLocalStorage();
    const initialState = {
      view: "Septiembre",
    };

    if (!dataLocalStorage) {
      localStorage.setItem("bold", JSON.stringify(initialState));
      setView(initialState.view);
    } else {
      setView(dataLocalStorage.view);
    }
  }, []);

  const value = useMemo(() => {
    return {
      data,
      view,
      setStateView,
    };
  }, [data, view, setStateView]);

  return <SalesContext.Provider value={value} {...props} />;
};

export const useSales = () => {
  const context = React.useContext(SalesContext);
  if (!context) {
    throw new Error("useSales debe estar dentro del proveedor SalesContext");
  }

  return context;
};
