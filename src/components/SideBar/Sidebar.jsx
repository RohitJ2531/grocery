import React from "react";
import { MainContent } from "./MainContent";
import { Link } from "react-router-dom";

export const Sidebar = ({ setRole }) => {
  return (
    <>
      <aside className="bg-indigo-600 w-64 min-h-screen text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Retailer Dashboard</h1>
        </div>
        <nav className="mt-10">
          <Link
           to={"/"}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700"
          >
            Products
          </Link>
          <Link
           to={"/add-product"}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700"
          >
           Add Product
          </Link>
          <Link
           to={""}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700"
          >
            Orders
          </Link>
          <Link
           to={""}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700"
          >
            Customers
          </Link>
          <Link
           to={""}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-700"
          >
            Reports
          </Link>
        </nav>
      </aside>

     <MainContent setRole={setRole} />
    </>
  );
};
