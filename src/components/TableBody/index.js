import React from "react";

function TableBody({ data }) {
  return <tbody>
    {data.map(datapoint => {
      return <tr key={datapoint.id}>
        <td>{datapoint.id}</td>
        <td>{datapoint.firstName}</td>
        <td>{datapoint.lastName}</td>
        <td>{datapoint.title}</td>
        <td>{datapoint.department}</td>
        <td>{datapoint.salary}</td>
      </tr>
    })}
  </tbody>
};

export default TableBody;
