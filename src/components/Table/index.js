import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

// Requires keys and table data
function Table({ keys, data }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-light">
        <TableHeader keys={keys} />
        <TableBody data={data} />
      </table>
    </div>
  );
};

export default Table;
