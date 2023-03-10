import React, { useState, useEffect, useMemo } from "react";

import Data from "../data.json";

const SalesContext = React.createContext();

export const SalesProviders = (props) => {
  const data = Data;
  const dateToday = "2020/09/13 17:14:24";

  const [view, setView] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const [week, setWeek] = useState(0);
  const [filterTable, setFilterTable] = useState("");

  const getDataLocalStorage = () => {
    return JSON.parse(localStorage.getItem("bold"));
  };

  const setLocalStorage = (data) => {
    localStorage.setItem("bold", JSON.stringify(data));
  };

  const getMothDate = (dateMonth) => {
    const options = { month: "long" };
    return new Intl.DateTimeFormat("es-CO", options).format(
      new Date(dateMonth.replace(/-/g, "/"))
    );
  };

  const getWeekDate = (dateString) => {
    const d = new Date(dateString.replace(/-/g, "/"));
    const date = d.getDate();
    const day = d.getDay();
    return Math.ceil((date - 1 - day) / 7);
  };

  const convertDate = (dateConvert) => {
    const newDate = new Date(dateConvert.replace(/-/g, "/"));
    const dateDay = newDate.getDate();
    return dateDay;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setFilterResult = (filter) => {
    setFilterTable(filter);
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

  useEffect(() => {
    if (view === "Septiembre") {
      const filterData = data?.data?.filter(
        (sale) => getMothDate(sale?.date) === "septiembre"
      );
      setDataFilter(filterData);
    }

    if (view === "Week") {
      setWeek(getWeekDate(dateToday));
      const filterData = data?.data?.filter(
        (sale) => getWeekDate(sale?.date) === getWeekDate(dateToday)
      );
      setDataFilter(filterData);
    }

    if (view === "Today") {
      const filterData = data?.data?.filter(
        (sale) => convertDate(sale?.date) === convertDate(dateToday)
      );
      setDataFilter(filterData);
    }
  }, [data, view]);

  const value = useMemo(() => {
    return {
      data,
      view,
      week,
      dateToday,
      dataFilter,
      filterTable,
      setStateView,
      setFilterResult,
    };
  }, [
    data,
    view,
    week,
    dataFilter,
    filterTable,
    setStateView,
    setFilterResult,
  ]);

  return <SalesContext.Provider value={value} {...props} />;
};

export const useSales = () => {
  const context = React.useContext(SalesContext);
  if (!context) {
    throw new Error("useSales debe estar dentro del proveedor SalesContext");
  }

  return context;
};
