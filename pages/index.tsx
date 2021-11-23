import type { NextPage } from 'next';

import NavBar from '../components/general/Navbar';
import Footer from '../components/general/Footer';
import Head from 'next/head';
import axios from "axios";

import { useEffect } from "react";
import UseCookie from '../hooks/useCookie';

const Home: NextPage = () => {

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

  return (
    <div className='min-h-screen relative'>
      <Head>
        <title>Wagentekk | Catalogue</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className='overflow-hidden min-h-screen bg-gray-100 w-full'></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
