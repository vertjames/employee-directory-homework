import React from "react";

const TableContext = React.createContext({
  employees: [],
  keys: [],
  order: "id",
  changeParams: () => { }
});

export default TableContext;
