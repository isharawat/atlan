import React, { useState } from "react";
import { data3 } from "../../dummyData";

const array = data3;

const usePagination = (items, page = 1, perPage = 10) => {
  const [activePage, setActivePage] = useState(page);
  const totalPages = Math.ceil(items.length / perPage);
  const offset = perPage * (activePage - 1);
  const paginatedItems = items.slice(offset, perPage * activePage);
  return {
    activePage,
    nextPage: () => setActivePage((p) => (p < totalPages ? p + 1 : p)),
    previousPage: () => setActivePage((p) => (p > 1 ? p - 1 : p)),
    totalPages,
    totalItems: items.length,
    items: paginatedItems,
  };
};

const Main = () => {
  const { activePage, nextPage, previousPage, totalPages, items } =
    usePagination(array);

  const columns = Object.keys(items[0]);
  console.log(columns);
  return (
    <div className="outer-data-table">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <button
          className="btn-move"
          onClick={previousPage}
          disabled={activePage <= 1}
        >
          Previous
        </button>
        <span>
          (page {activePage}/{totalPages})
        </span>
        <button
          className="btn-move"
          onClick={nextPage}
          disabled={activePage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const OutputDetails = ({ outputDetails }) => {

  if (!outputDetails || outputDetails.length === 0) {
    return <></>;
  }

  return (
    <div className="outer-data-table">
      <Main />
    </div>
  );
};

export default OutputDetails;
