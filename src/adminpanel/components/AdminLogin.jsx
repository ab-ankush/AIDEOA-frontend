import React from "react";

const AdminLogin = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <div className="text-center">
          <img
            src="/public/AIDEOA LOGO 3.png"
            alt="AIDEOA Logo"
            className="mx-auto mb-2 w-12"
          />
          <h1 className="text-lg font-bold  mb-4">
            <span className="text-[#4B0082]">AIDEOA</span> DASHBOARD
          </h1>
          <h2 className="text-4xl font-bold mb-6">Welcome back!</h2>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none "
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none "
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className=" text-purple-600" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="/" className="text-sm text-purple-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#4B0082] text-white font-medium py-2 px-4 rounded-lg hover:opacity-80 duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
