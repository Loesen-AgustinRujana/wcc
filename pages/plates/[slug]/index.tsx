import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link"

import { ArrowLeftIcon } from "@heroicons/react/solid";
import NavBar from "../../../components/general/Navbar";
import Footer from "../../../components/general/Footer";
import axios from "axios";
import { useEffect } from "react";
import UseCookie from "../../../hooks/useCookie";

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

    if (accessToken !== '0') verify();
    else window.location.href = '/iniciar-sesion';
  }, []);

  const { slug } = router.query;

  return (
    <>
      <NavBar/>
      <div className="bg-gray-50 h-screen pt-10">
        <div className="max-w-7xl mx-auto px-0 sm:px-4 xl:px-0">
          <span className="sr-only">Heading</span>
          <div className="bg-blue-800 font-medium text-white px-2 py-1.5 sm:rounded-lg shadow flex justify-between items-center">
            <Link href="/plates" >
            <a className="cursor-pointer hover:text-gray-200">
              <span aria-hidden="true">&nbsp; &larr; </span>
              Volver
            </a>
            </Link>
            <span className="text-lg font-medium">{slug}</span>
          </div>
          <span className="sr-only">Body</span>
          <div className="grid grid-cols-12 gap-x-4 py-4">
            <div className="xl:col-span-4 xl:mt-0 sm:col-span-6 col-span-12 bg-white sm:rounded-lg shadow divide-y divide-solid">
              <div className="font-medium p-2">Details</div>
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span>Plate:</span>
                  <span>AA 000 AA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Brand:</span>
                  <span>Peugeot</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Model:</span>
                  <span>2020</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Vehicle ID:</span>
                  <span>23837dasdk209d</span>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 xl:mt-0 sm:col-span-6 col-span-12 mt-4 sm:mt-0 bg-white sm:rounded-lg shadow divide-y divide-solid">
              <div className="font-medium p-2">Vehicle</div>
              <div className="p-2">
                <div className="flex justify-between items-center">
                  <span>Brand:</span>
                  <span>Peugeot</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Model:</span>
                  <span>2020</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Country:</span>
                  <span>Argentina</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Engine:</span>
                  <span>Diesel</span>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 xl:mt-0 col-span-12 mt-4 bg-white sm:rounded-lg shadow divide-y divide-solid">
              <div className="font-medium p-2">
                Compatible Products
              </div>
              <div className="p-2">
                <div className="flex justify-around items-center">
                  <span>Fotos of productos o lista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Details;
