// Icon Imports
import { iconCar, iconBrake, iconSearch } from "../icons";

const icons = {
  car: iconCar,
  brake: iconBrake,
  search: iconSearch,
};

export default function Hero({ setQuery }: { setQuery: Function }) {
  const searchParams = (e: any) => {
    e.preventDefault();
    let queryString = "";
    if (e.target.brand.value) {
      queryString = queryString.concat(`brand=${e.target.brand.value}`, "&");
    }
    if (e.target.model.value) {
      queryString = queryString.concat(`model=${e.target.model.value}`, "&");
    }
    if (e.target.plate.value) {
      queryString = queryString.concat(`plate=${e.target.plate.value}`);
    }
    setQuery(queryString);
  };

  return (
    <div className="mt-3 sm:mt-0 sm:pt-5 sm:px-4 lg:w-1/4 mb-8">
      <form
        className="sm:rounded-md flex flex-col  sm:overflow-hidden bg-white shadow sm:pt-1"
        onSubmit={searchParams}
      >
        <div className="px-2 py-2 lg:py-1 flex items-center lg:justify-start justify-center border-b md:border-b-0">
          <icons.car
            className="h-6 w-6 mr-2 text-blue-600"
            aria-hidden="true"
          />
          <h2 className="text-md font-medium text-gray-900">Vehicle</h2>
        </div>
        <div className="px-2 py-2 lg:py-1 lg:col-span-2">
          {/* Plate */}
          <label
            htmlFor="plate"
            className="block text-sm font-medium text-gray-500"
          >
            Plate
          </label>
          <input
            autoComplete="off"
            type="text"
            id="plate"
            name="plate"
            className="block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="px-2 py-2 lg:py-1 lg:col-span-2">
          {/* Brand */}
          <label
            htmlFor="brand"
            className="block text-sm font-medium text-gray-500"
          >
            Brand
          </label>
          <input
            autoComplete="off"
            type="text"
            id="brand"
            name="brand"
            className="block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="px-2 py-2 lg:py-1 lg:col-span-2">
          {/* Modelo */}
          <label
            htmlFor="modelo"
            className="block text-sm font-medium text-gray-500"
          >
            Model
          </label>
          <input
            autoComplete="off"
            type="text"
            id="model"
            name="model"
            className="block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="w-full lg:col-span-9 sm:pt-2">
          <button
            type="submit"
            className="text-center text-md block bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 w-full focus:outline-none "
          >
            Filter
            <span aria-hidden="true">&nbsp; &rarr;</span>
          </button>
        </div>
      </form>
    </div>
  );
}
