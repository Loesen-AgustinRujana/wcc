import type { NextPage } from "next";

import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../../components/general/Navbar";
import Search from "../../components/general/Search";
import Hero from "../../components/plates/Hero";
import Table from "../../components/plates/Table";
import Head from "next/head";
import Footer from "../../components/general/Footer";
import UseCookie from "../../hooks/useCookie";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");

  //Pagination
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [page, setPage] = useState(1);

  //Content
  const [positions, setPositions] = useState([]);

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

  //UseEffect
  useEffect(() => {
    if (process.browser) {
      //const admin = JSON.parse(localStorage.getItem('admin'));
      axios({
        method: "get",
        url: `${"http://127.0.0.1:8002"}/plates?${query}`,
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,
        // },
        data: "",
      })
        .then((res) => {
          setTotal(res.data.pagination.total);
          setPerPage(res.data.pagination.perPage);
          setPage(res.data.pagination.page);
          setPositions(res.data.plates);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query]);

  let from = (page - 1) * perPage + 1;
  if (total === 0) from = 0;
  let to = perPage * page;
  if (to > total) to = total;

  return (
    <>
      <div className="min-h-screen relative">
        <Head>
          <title>Wagentekk | Catalogue</title>
        </Head>
        <header>
          <NavBar/>
        </header>
        <main className="min-h-screen overflow-hidden bg-gray-100 w-full">
          {/* <Search setQuery={setQuery}/> */}
          <div className="flex max-w-7xl mx-auto justify-between flex-col lg:flex-row">
            <Hero setQuery={setQuery} />
            <Table
              query={query}
              total={total}
              page={page}
              setPage={setPage}
              perPage={perPage}
              positions={positions}
              setPositions={setPositions}
              from={from}
              to={to}
            />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
