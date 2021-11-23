import type { NextPage } from "next";
import Head from "next/head";
import axios from "axios";

import { useState, useEffect } from "react";
import UseCookie, { setCookie } from "../hooks/useCookie";

const LogIn: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accessToken, setaccessToken] = UseCookie("accessToken", "0");

  useEffect(() => {
    const verify = async () => {
      await axios
        .get("http://127.0.0.1:8002/users/auth", {
          headers: {
            authorization: accessToken,
          },
        })
        .then((res) => {
          if (res.data) {
            window.location.href = "/";
          }
        })
        .catch((err) => console.log(err));
    };

    if (accessToken !== "0") verify();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    await axios
      .post("http://localhost:8080/user/signin", data)
      .then((res) => {
        setCookie("accessToken", res.data.accessToken, 1);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Head>
        <title>Iniciar Sesión | Wagentekk Catalogue</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="Loesen SA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="py-20 bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md flex items-center justify-center">
          <a href="/iniciar-sesion">
            <img
              className="h-16 w-auto cursor-pointer mx-auto"
              src="/wagentekk.svg"
              alt="Wagentekk Logo"
            />
          </a>
          <span className="text-blue-700 py-1 px-3 ml-3 rounded-md bg-blue-50">
            Catalogue
          </span>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white p-3 shadow sm:rounded-lg">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={email}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={password}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-0"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LogIn;
