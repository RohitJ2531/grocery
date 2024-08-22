import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to left top, #f0f3f7, #b9e8fc, #69e0eb, #00d5ba, #2cc46f)`,
      }}
    >
      <div className="w-full max-w-md bg-emerald-50 rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700"> Sign In</h2>
        <form className="mt-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
