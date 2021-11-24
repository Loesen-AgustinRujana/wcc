import type { NextComponentType } from "next";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { iconMenu, iconChevronDown, iconSearch } from "../icons";
import { social } from '../../content/social';

const navigation = [
  { name: "Plates", href: "/plates" },
  { name: "Products", href: "/products" },
  { name: "Vehicles", href: "/vehicles" },
];

const icons = {
  chevronDown: iconChevronDown,
  menu: iconMenu,
  search: iconSearch,
};

const NavBar: NextComponentType = () => {
  return (
    <div className="relative w-full border-b">
      <div className="mx-auto max-w-7xl flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-10 sm:h-12 md:h-14 m-2"
            src="/wagentekk.svg"
            alt="Logo"
          />
          <span className="ml-2 text-blue-600 font-medium text-xs sm:text-sm md:text-base">
            Catalogue
          </span>
        </div>
        <div className="md:hidden">
          <Popover className="">
            {({ open }) => (
              <>
                <Popover.Button className="bg-white rounded-lg p-2 inline-flex items-center justify-center text-blue-900 hover:text-black focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <icons.menu
                    className="h-7 w-7 text-blue-800 stroke-2"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute top-0 left-0 w-full z-10 overflow-hidden">
                    <div className="bg-white rounded-lg shadow mx-1 divide-y">
                      <div className="flex items-center">
                        <img
                          className="h-10 sm:h-12 md:h-14 m-2"
                          src="/wagentekk.svg"
                          alt="Logo"
                        />
                        <span className="ml-2 text-blue-600 font-medium text-xs sm:text-sm md:text-base">
                          Catalogue
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        {navigation.map((item, itemIdx) => (
                          <a
                            className="text-lg py-1 pl-2 font-medium text-gray-900"
                            href={item.href}
                            key={itemIdx}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="flex justify-center gap-x-2 py-2">
                      {social.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className='text-gray-500 hover:text-red-700'
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <span className='sr-only'>{item.name}</span>
                            <item.icon className='h-6 w-6' aria-hidden='true' />
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>

        <ul className="gap-x-8 mr-8 hidden md:flex">
          {navigation.map((item, itemIdx) => (
            <li className="text-sm text-gray-600 hover:text-gray-900" key={itemIdx}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
