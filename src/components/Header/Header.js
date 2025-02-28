import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-[15%] h-screen flex justify-center p-4 bg-black ">
      <nav className="h-[60vh] mt-4 ">
        <h1 className="text-white mb-[70px] ">logo</h1>
        <ul className="h-[70%] flex-col flex justify-between mt-4">
          {/* <li className="">
           <Link
              className="text-none font-poppins text-white "
              to={"/dashboard"}
            >
              Dashboard
            </Link>
          </li>*/}

          <li className="">
            <Link
              className="text-none font-poppins text-white "
              to={"/products"}
            >
              Products
            </Link>
          </li>
          <li className="">
            <Link className="text-none font-poppins text-white " to={"/orders"}>
              Orders
            </Link>
          </li>
          {/* <li className="">
            <Link className="text-none font-poppins text-white " to={"/users"}>
              Users
            </Link>
          </li> */}
          <li className="">
            <Link className="text-none font-poppins text-white " to={"/create"}>
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
