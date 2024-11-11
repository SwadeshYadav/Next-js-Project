'use client';

import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden mt-12">
      <div className="bg-gray-700  rounded-xl flex items-center justify-center flex-row w-full max-w-5xl space-x-20">
        <div className="flex-1 text-center text-white">
          <h2 className="text-5xl font-bold text-blue-600">Contact Us</h2>
          <p className="mt-4 text-[19px] max-w-md mx-auto">
            If you have any questions or need further assistance, feel free to reach out to our support team at 
            <a href="mailto:support@website.com" className="text-blue-500"> yadavswadesh9670@gmail.com</a>. 
            We are here to help!
          </p> 
        </div>

        <div className="flex-1 bg-gray-800 p-4 md:p-10 rounded shadow-xl">
          <h1 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h1>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-950 text-white"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-950 text-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-950 text-white"
                placeholder="Enter your password"
              />
            </div>
            <button className="w-full bg-gray-950 text-white py-3 border border-gray-300 rounded-lg hover:bg-gray-900">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
