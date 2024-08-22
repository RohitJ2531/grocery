import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getProduct } from "../../service/service";
import { fetchedProducts } from "../AddProduct/ProductAction";
import { useDispatch } from "react-redux";

const Navbar = ({ role, setRole }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    getProduct()
      .then((res) => dispatch(fetchedProducts(res.data)))
      .catch((err) => console.log(err));
  });
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to={"/"}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  aria-current="page"
                >
                  Products
                </Link>

                {role && (
                  <>
                    <Link
                      to={"/add-product"}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Add Product
                    </Link>

                    <Link
                      to={"/manage-product"}
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Manage Product
                    </Link>
                  </>
                )}

                <Link
                  to="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Cart Icon */}
            {!role && (
              <div className="relative">
                <Link to={"/cart"} className="text-white mt-1 rounded-full">
                  <FaShoppingCart className="h-9 w-9" aria-hidden="true" />
                </Link>
                {/* Optional: Add cart item count */}
                {/* <span className="absolute mt-3 top-0 left-6 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  928
                </span> */}
              </div>
            )}
            {/* notification icon */}
            {role && (
              <div className="relative">
                <button type="button" className="text-white p-1 rounded-full">
                  <FiBell className="h-9 w-9" aria-hidden="true" />
                </button>
                {/* Optional: Add cart item count */}
                {/* <span className="absolute top-0 left-6 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  928
                </span> */}
              </div>
            )}

            <div
              className="btn-group ms-5"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                onChange={() => setRole(false)}
              />
              <label className="btn btn-outline-success" htmlFor="btnradio1">
                Customer
              </label>
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                onChange={() => setRole(true)}
              />
              <label className="btn btn-outline-warning" htmlFor="btnradio2">
                Retailer
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
