import React from "react";
import router from "next/router";

const Cards = ({ positions, icons } : any) => {
  const refreshFilters = () => {
    return router.reload();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
      {positions.length !== 0 &&
        positions.map((position: any, i:number) => {
          return (
            <div
              className="flex bg-white hover:bg-gray-50 shadow-sm border-t cursor-pointer w-full"
              key={i}
            >
              <div className="flex-none w-24 sm:w-28 relative">
                <div
                  style={{
                    backgroundImage: `url("/product.webp")`,
                    paddingBottom: "90%",
                    backgroundSize: "auto 100%",
                  }}
                  className="w-full bg-cover bg-center bg-gray-400"
                ></div>
              </div>
              <div className="flex flex-col justify-center sm:justify-around p-1 sm:p-2 w-full">
                <div className="flex items-center ">
                  <h1 className="flex justify-between text-sm leading-none w-full font-bold">
                    <span>{position.code}</span>
                    <span>{position.locationCode}</span>
                  </h1>
                </div>
                <div className="flex flex-wrap my-1">
                  <div className="w-full flex items-center">
                    {position.brand} - {position.category}
                  </div>
                </div>
                <div className="flex items-center w-full">
                  {position.axis}
                  <span>
                    <icons.brakePad
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 ml-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
