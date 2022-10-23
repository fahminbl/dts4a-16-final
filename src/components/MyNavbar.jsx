import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, signOutFromEveryWhere } from "../authentication/firebase";

export default function MyNavbar() {
  const btnLogoutClickHandler = () => {
    signOutFromEveryWhere();
  };
  const [user, isLoading] = useAuthState(auth)
  const navigate = useNavigate()
  const [email, setEmail] = useState(null)
  useEffect(
    () => {
      if (isLoading) {
        setEmail('Siapa Ya?')
      }
      if (!user) {
        navigate('/login')
      } else { 
        setEmail(user.email)
      }
    },[user, isLoading, navigate]
  )
  return (
    <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <a
              className="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold"
              href="/news"
            >
              <i className="fas fa-sun text-pink-600 pr-3" /> News Now
            </a>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 pl-2 md:flex-none items-center">
              <li className="mr-3">
                <button
                  className="inline-block text-black no-underline hover:text-slate-500 hover:text-underline py-2 px-4"
                  onClick={btnLogoutClickHandler}
                >
                  LogOut ({email? email: 'from this'})
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    // <Navbar fluid={true} rounded={false}>
    //   <Navbar.Brand href="https://flowbite.com/">
    //     <img
    //       src="https://flowbite.com/docs/images/logo.svg"
    //       className="mr-3 h-6 sm:h-9"
    //       alt="Flowbite Logo"
    //     />
    //     <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
    //       Flowbite
    //     </span>
    //   </Navbar.Brand>
    //   <Navbar.Toggle />
    //   <Navbar.Collapse>
    //       <TextInput
    //         id="txtSearch"
    //         placeholder="Pencarian berita"
    //         required={true}
    //         icon={HiSearch}
    //         sizing="sm"
    //       />
    //     <Navbar.Link href="/navbars" active={true}>
    //       Home
    //     </Navbar.Link>
    //     <Navbar.Link onClick={btnLogoutClickHandler}>Logout</Navbar.Link>
    //     <Navbar.Link href="/navbars">About</Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>

    // <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    //   <div class="container flex flex-wrap justify-between items-center mx-auto">
    //     <a href="https://flowbite.com/" class="flex items-center">
    //       <img
    //         src="https://flowbite.com/docs/images/logo.svg"
    //         class="mr-3 h-6 sm:h-9"
    //         alt="Flowbite Logo"
    //       />
    //       <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
    //         News Now
    //       </span>
    //     </a>
    //     <button
    //       data-collapse-toggle="navbar-default"
    //       type="button"
    //       class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded="false"
    //     >
    //       <span class="sr-only">Open main menu</span>
    //       <svg
    //         class="w-6 h-6"
    //         aria-hidden="true"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>
    //     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
    //             aria-current="page"
    //           >
    //             Home
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Pricing
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
