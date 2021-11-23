import React from "react";
import router from "next/router";

const Rows = ({ positions, icons } : any) => {
  const refreshFilters = () => {
    return router.reload();
  };
  return (
    <>
      <div>
        <div className="divide-y divide-gray-400 sm:divide-gray-200">
          <div className="hidden md:block bg-gray-50 p-3">
            <div className="grid grid-cols-2 md:grid-cols-8">
              <div className="flex items-center">
                <p className="text-sm text-black font-medium">Code</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black font-medium">Product</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black font-medium">Brand</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black font-medium">Category</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black font-medium">Subcategory</p>
              </div>
            </div>
          </div>

          {positions.length !== 0 &&
            positions.map((position, i) => (
              <a
                key={i}
                className="block hover:bg-gray-50 cursor-pointer"
                href={`/products/${position.code}`}
              >
                <div className="p-3">
                  <div className="grid grid-cols-2 md:grid-cols-8">
                    <div className="flex items-center">
                      <p className="text-sm text-black font-semibold">
                        {position.code}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm text-black">{position.brand}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm text-black">{position.brand}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm text-black">{position.brand}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm text-black">{position.brand}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}

          {positions.length === 0 && (
            <div className="flex items-center justify-center w-full">
              <div className="flex justify-center items-center text-center py-20">
                <div>
                  <p className="font-bold text-3xl">
                    No hay resultados para esta busqueda.
                  </p>
                  <button
                    onClick={refreshFilters}
                    className="mt-8 bg-gray-600 px-4 py-2 rounded-md text-white shadow-md"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Rows;
