import React from "react";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { asset } from "../assets/asset";
import { Link } from "react-router-dom";

const RegLog = () => {
  const dynamicMarkdown = `
## Welcome Back!  
Please log in to continue to your account and explore all features.
  `;

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* SEO Metadata */}
      <Helmet>
        <title>Login - FoodTrove</title>
        <meta
          name="description"
          content="Log in to your account to continue using our services. Secure and quick login process."
        />
        <meta
          name="keywords"
          content="login, user login, account access, sign in"
        />
      </Helmet>

      {/* Header */}
      <header className="h-16 bg-[#F53E32] flex items-center justify-between px-[9vw] text-white">
        <h1 className="text-lg font-semibold">Login</h1>
        <p className="text-sm">Home &gt; Login</p>
      </header>

      {/* Login Container */}
      <main className="mt-10 mb-20">
        <div className="w-[90%] max-w-[450px] mx-auto bg-white shadow-md rounded-lg p-6">
          {/* Logo */}
          <div className="text-center mb-6">
            <img src={asset.logo} alt="Logo" className="w-24 mx-auto" />
          </div>

          {/* Markdown Content */}
          <div className="mb-8 text-center">
            <ReactMarkdown>{dynamicMarkdown}</ReactMarkdown>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Address */}
            <div>
              <label className="block text-gray-700 mb-2 text-sm font-medium">
                Email Address*
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F53E32] focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-2 text-sm font-medium">
                Password*
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F53E32] focus:outline-none"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#F53E32] border-gray-300 rounded focus:ring-[#F53E32]"
                />
                Remember Me
              </label>
              <p className="cursor-pointer hover:text-[#F53E32] transition">
                Forgot Password?
              </p>
            </div>

            {/* Login Button & Sign Up Link */}
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-[#F53E32] text-white px-6 py-2 rounded-md hover:bg-[#d42c24] transition"
              >
                Login
              </button>
              <Link
                to="/signUp"
                className="text-sm text-[#F53E32] hover:underline"
              >
                Sign Up?
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegLog;
