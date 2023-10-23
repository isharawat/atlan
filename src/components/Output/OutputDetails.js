import React, { useEffect, useState } from "react";

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

const Main = ({outputDetails}) => {
  
  const array = outputDetails;
  const { activePage, nextPage, previousPage, totalPages, items } = usePagination(array);
  const columns = Object.keys(items[0]);

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
        <tbody style={{backgroundColor: "rgb(244 250 254)"}}>
          {items.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column}>{row[column].toString()}</td>
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

export const OutputDetails = ({outputDetails}) => {
  
  const [array, setArray] = useState([]);
  const fetchData = async() => {
    let data = await fetch(
      "https://random-data-api.com/api/v2/blood_types?size=100"
      );
    data = await data.json();
    console.log(data);
    setArray(data);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  if (!outputDetails || outputDetails.length === 0) {
    return <></>;
  }
  
  return (
    <div className="outer-data-table">
      {array.length && <Main  outputDetails = {array}/>}
    </div>
  );
};

export default OutputDetails;
