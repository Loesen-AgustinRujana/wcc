import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { ArrowLeftIcon } from "@heroicons/react/solid";
import NavBar from "../../../components/general/Navbar";
import UseCookie from "../../../hooks/useCookie";
import axios from "axios";

const content = [
  {
    business: "Business Name",
    taxID: "20-41231322-2",
    phone: "2804181111",
    type: "Cellphone",
  },
];

const Details: NextPage = () => {
  const router = useRouter();
  const [accessToken, setaccessToken] = UseCookie('accessToken', '0');

  useEffect(() => {
    const verify = async () => {
      await axios
        .get('https://api.users.wagentekk.com/users/auth', {
          headers: {
            authorization: accessToken,
          },
        })
        .then((res) => {
          if (res.data === false) {
            window.location.href = '/iniciar-sesion';
          }
        })
        .catch((err) => console.log(err));
    };

    if (accessToken !== '0')  verify();
    else window.location.href = '/iniciar-sesion';
  }, []);

  const { slug } = router.query;

  return (
    <>
      <NavBar />
      <div className="bg-gray-50 h-screen pt-10">
        <div className="max-w-7xl mx-auto sm:px-4 xl:px-0">
          <span className="sr-only">Heading</span>
          <div className="bg-blue-800 font-medium text-white px-2 py-1.5 sm:rounded-lg shadow flex justify-between items-center">
            <a href="/products" className="cursor-pointer hover:text-gray-200">
              <span aria-hidden="true">&nbsp; &larr; </span>
              Volver
            </a>
            <span className="text-lg font-medium">{slug}</span>
          </div>
          <span className="sr-only">Body</span>
          <div className="grid grid-cols-12 sm:gap-x-4 py-4">
            <div className="col-span-12 md:col-span-6 xl:col-span-4 mb-4 xl:mb-0 bg-white sm:rounded-lg shadow divide-y divide-solid">
              <div className="font-medium p-2 rounded-t-lg">Details</div>
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span>Product:</span>
                  <span>Pepito Stores</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Code:</span>
                  <span>20-41735233-4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Category:</span>
                  <span>2804101232</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Subcategory:</span>
                  <span>23837dasdk209d</span>
                </div>
              </div>
            </div>
            <div className="col-span-6 xl:col-span-4 md:mb-4 xl:mb-0 bg-white sm:rounded-lg shadow divide-y divide-solid">
              <div className="font-medium p-2 rounded-t-lg">Measures</div>
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span>Gross Weight:</span>
                  <span>223cm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gross Height:</span>
                  <span>210cm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gross Width:</span>
                  <span>120cm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gross Length:</span>
                  <span>23cm</span>
                </div>
              </div>
            </div>
            <div className="col-span-6 xl:col-span-4 bg-green-50 sm:rounded-lg shadow divide-y divide-solid">
              <div className="p-2">Image</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
