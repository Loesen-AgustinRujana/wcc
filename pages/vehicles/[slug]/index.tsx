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
        .get('http://127.0.0.1:8002/users/auth', {
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

    if (accessToken !== '0') return verify();
    window.location.href = '/iniciar-sesion';
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
            <div className="col-span-12 md:col-span-6 mb-4 md:mb-0 bg-white sm:rounded-lg shadow divide-y divide-solid">
              <div className="font-medium p-2 rounded-t-lg">Details</div>
              <div className="px-2">
                <div className="py-1 flex justify-between items-center">
                  <span className="font-medium text-gray-500">E-mail:</span>
                  <span>test@hotmail.com</span>
                </div>
                <div className="py-1 flex justify-between items-center">
                  <span className="font-medium text-gray-500">FirstName:</span>
                  <span>Agustin</span>
                </div>
                <div className="py-1 flex justify-between items-center">
                  <span className="font-medium text-gray-500">Lastname:</span>
                  <span>Rujana</span>
                </div>
                <div className="py-1 flex justify-between items-center">
                  <span className="font-medium text-gray-500">Telephone:</span>
                  <span>180 4181677</span>
                </div>
                <div className="py-1 flex justify-between items-center">
                  <span className="font-medium text-gray-500">
                    Identification:
                  </span>
                  <span>DNI. 41735233</span>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 bg-white sm:rounded-lg shadow divide-y divide-solid">
              <div className="font-medium p-2 rounded-t-lg">Adresses</div>
              <div className="p-2">
                <div>Adresses #1</div>
                <div>Adresses #2</div>
                <div>Adresses #3</div>
                <div>Adresses #4</div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 bg-white sm:rounded-lg shadow divide-y divide-solid">
              <div className="font-medium p-2 rounded-t-lg">Members</div>
              <div className="p-2">
                <div>Members</div>
                <div>Members</div>
                <div>Members</div>
                <div>Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
