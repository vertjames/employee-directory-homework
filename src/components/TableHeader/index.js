import React from "react";

function TableHeader({ keys }) {
  return <thead className="thead-dark">
    <tr>
      {keys.map(key => {
        return <th scope="col" key={key}>{key}</th>
      })}
    </tr>
  </thead>
};

export default TableHeader;
