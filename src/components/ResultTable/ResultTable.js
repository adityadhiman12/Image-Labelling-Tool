import React from "react";
import "./ResultTable.css";
const ResultTable = props => {
  return (
    <div className="ResultTable">
      <div className="table-title">
        <h3>Animal Selection Table</h3>
      </div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">No of Cats Selected</th>
            <th className="text-left">No of Dogs Selected</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          <tr>
            <td className="text-left">{props.totalCats}</td>
            <td className="text-left">{props.totalDogs}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
