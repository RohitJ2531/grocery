import React, { useState } from "react";
import { addProduct } from "./ProductAction";
import { addProductData } from "../../service/service";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddProduct = () => {
  const [userInput, setUserInput] = useState({});

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value, 10) : value,
    }));
  };

  const onAddProduct = async () => {
    await addProductData(userInput)
      .then((res) => {
        dispatch(addProduct(res.data));
        toast.success("Product added successfully!");
      })
      .catch((err) => {
        toast.error("Failed to add product. Please try again.");
        console.log(err);
      });
    setUserInput({});
  };

  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div className="bg-emerald-50 rounded-2xl shadow-2xl  rounded-lg p-8 w-full max-w-md my-3">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Grocery Product
        </h2>
        {/* Form */}
        <div className="space-y-6">
          {/* Add Image URL */}
          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image-url"
              name="imageURL"
              placeholder="Enter image url"
              className="w-full mt-2 px-4  py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required=""
              onChange={handleInputChange}
            />
          </div>
          {/* Product Name */}
          <div>
            <label
              htmlFor="product-name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="product-name"
              name="productName"
              placeholder="Enter product name"
              className="w-full mt-2 px-4  py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required=""
              onChange={handleInputChange}
            />
          </div>

          {/* Product Description */}
          <div>
            <label
              htmlFor="product-description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Product Description
            </label>
            <textarea
              type="text"
              id="product-description"
              name="description"
              placeholder="Enter product description"
              className="w-full mt-2 px-4  py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required=""
              onChange={handleInputChange}
            />
          </div>
          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full mt-2 px-4  py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required=""
              onChange={handleInputChange}
            >
              <option value="" disabled="" selected="">
                Select category
              </option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="dairy">Dairy</option>
              <option value="snacks">Snacks</option>
            </select>
          </div>
          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              step="0.01"
              className="w-full mt-2 px-4  py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required=""
              onChange={handleInputChange}
            />
          </div>
          {/* Quantity */}
          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Enter quantity"
              className="w-full mt-2 px-4  py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required=""
              onChange={handleInputChange}
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={onAddProduct}
              className="w-full bg-indigo-600 text-white px-4  py-1 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Product
            </button>
          </div>
          {/* Toast Notification */}
          <ToastContainer position="bottom-right" />
        </div>
      </div>
    </div>
  );
};
