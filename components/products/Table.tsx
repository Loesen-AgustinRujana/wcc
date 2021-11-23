// Package Imports
import axios from "axios";
import { FunctionComponent, useState } from "react";

// Icon Imports
import {
  iconCar,
  iconBrake,
  iconBrakePad,
  iconGrid,
  iconLocation,
  iconTable,
} from "../icons";

const icons = {
  car: iconCar,
  brake: iconBrake,
  brakePad: iconBrakePad,
  grid: iconGrid,
  location: iconLocation,
  table: iconTable,
};

import Rows from "./TableLayout/Rows";
import Cards from "./TableLayout/Cards";

type Props = {
  query: string;
  total: number;
  page: number;
  perPage: number;
  setPage: Function;
  positions: Array<any>;
  setPositions: Function;
  from: number;
  to: number;
};

const Table: FunctionComponent<Props> = ({
  from,
  to,
  query,
  total,
  page,
  perPage,
  setPage,
  positions,
  setPositions,
}) => {
  //Layout
  const [layout, setLayout] = useState("rows");

  const previous = () => {
    //const admin = JSON.parse(localStorage.getItem('admin'));
    axios({
      method: "get",
      url: `${"http://api.catalogue.wagentekk.com"}/products?page=${page - 1}?${query}`,
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
      data: "",
    })
      .then((res) => {
        setPage(res.data.pagination.page);
        setPositions(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const next = () => {
    //const admin = JSON.parse(localStorage.getItem('admin'));
    axios({
      method: "get",
      url: `${"http://api.catalogue.wagentekk.com"}/products?page=${page + 1}`,
      // headers: {
      //   Authorization: `Bearer ${accessToken}`,
      // },
      data: "",
    })
      .then((res) => {
        setPage(res.data.pagination.page);
        setPositions(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="mt-3 mx-auto sm:mt-0 sm:pt-5 sm:px-4 w-full lg:w-3/4 mb-20">
        <div className="bg-white shadow overflow-hidden sm:rounded-md ">
          <div className="p-3 flex items-center justify-between border-b w-full">
            <h2 className="text-md font-medium text-gray-900 leading-none">
              Products
            </h2>

            <div className="flex items-center">
              <span className="relative z-0 inline-flex shadow-sm rounded-md">
                <button
                  type="button"
                  className={`${
                    layout === "cards" ? "bg-blue-800" : ""
                  } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border`}
                  onClick={() => setLayout("cards")}
                >
                  <icons.grid
                    className={`flex-shrink-0 h-5 w-5 ${
                      layout === "cards" ? "text-white" : 2
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <button
                  type="button"
                  className={`${
                    layout === "rows" ? "bg-blue-800" : ""
                  } -ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border`}
                  onClick={() => setLayout("rows")}
                >
                  <icons.table
                    className={`flex-shrink-0 h-5 w-5 ${
                      layout === "row" ? "text-white" : 2
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </span>
            </div>
            <span className="text-gray-500 ml-5">
              {from} - {to} of {total}{" "}
            </span>
          </div>
          {layout === "rows" && <Rows positions={positions} icons={icons} />}
          {layout === "cards" && <Cards positions={positions} icons={icons} />}

          <div className="bg-white flex items-center border-t justify-between">
            <span className="text-gray-500 p-3">
              {from} - {to} of {total}
            </span>
            <nav
              className="bg-white px-4 py-3 flex items-center justify-between border-gray-200"
              aria-label="Pagination"
            >
              <div className="flex justify-between">
                {page > 1 && (
                  <div
                    onClick={previous}
                    className="relative inline-flex items-center px-4 sm:px-6 lg:px-10 py-1 border border-gray-300 text-lg font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 cursor-pointer"
                  >
                    &larr;
                  </div>
                )}
                {page < total / perPage && (
                  <div
                    onClick={next}
                    className="ml-3 relative inline-flex items-center px-4 sm:px-6 lg:px-10 py-1 border border-gray-300 text-lg font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 cursor-pointer"
                  >
                    &rarr;
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
