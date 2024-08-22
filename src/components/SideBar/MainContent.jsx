import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export const MainContent = ({setRole}) => {
  return (
    <main className="flex-1 p-8">
      
        <h2 className="text-3xl font-bold mb-6">Manage Grocery Products</h2>
        <div
          className="btn-group float-end"
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
      
      {/* Add Product Button */}
      <div className="mb-6">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Add New Product
        </button>
      </div>
      {/* Product Table */}

      <ProductCard />
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-6 bg-gray-100 text-left text-sm font-medium text-gray-600">
                Product Name
              </th>
              <th className="py-2 px-6 bg-gray-100 text-left text-sm font-medium text-gray-600">
                Category
              </th>
              <th className="py-2 px-6 bg-gray-100 text-left text-sm font-medium text-gray-600">
                Price
              </th>
              <th className="py-2 px-6 bg-gray-100 text-left text-sm font-medium text-gray-600">
                Quantity
              </th>
              <th className="py-2 px-6 bg-gray-100 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Product Rows */}
            <tr className="border-b">
              <td className="py-2 px-6 text-sm">Apple</td>
              <td className="py-2 px-6 text-sm">Fruits</td>
              <td className="py-2 px-6 text-sm">$1.50</td>
              <td className="py-2 px-6 text-sm">100</td>
              <td className="py-2 px-6 text-sm">
                <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
            {/* Add more product rows as needed */}
          </tbody>
        </table>
      </div>
    </main>
  );
};
