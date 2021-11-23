// Icon Imports
import { iconCar, iconBrake, iconSearch } from "../icons";

const icons = {
  car: iconCar,
  brake: iconBrake,
  search: iconSearch,
};

export default function Search({ setQuery }: { setQuery: Function }) {
  const searchParams = (e: any) => {
    e.preventDefault();
    let queryString = "";
    if (e.target.search.value) {
      queryString = `search=${e.target.search.value}`
    }
    setQuery(queryString);
  };

  return (
    <div className="mt-3 sm:mt-0 sm:pt-5 mx-auto sm:px-4 max-w-7xl ">
      <form
        className="flex items-center justify-center "
        onSubmit={searchParams}
      >
        <div className=" w-full">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <icons.search
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full pl-10 pr-8 sm:pr-16 py-2 border border-gray-300 sm:rounded-md leading-5 shadow-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:text-sm ring-1 ring-blue-500"
              placeholder="Search"
              type="text"
              maxLength={50}
              minLength={3}
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                type="submit"
                className="h-full px-2 sm:px-4 border-transparent bg-blue-600 hover:bg-blue-700 sm:text-sm sm:rounded-md focus:outline-none "
              >
                <span className="sr-only">Buscar</span>
                <icons.search
                  className="h-5 w-5 text-white stroke-2"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
