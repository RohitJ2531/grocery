import React from "react";
import { Link } from "react-router-dom";

const Singup = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: `linear-gradient(to right top, #f0f3f7, #b9e8fc, #69e0eb, #00d5ba, #2cc46f)`,
      }}
    >
      <div className="w-full max-w-md bg-emerald-50 rounded-2xl shadow-2xl  p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Sign Up
        </h2>

        <form className="mt-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <Link to={"/"} className="text-blue-600 hover:underline">
             Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Singup;
