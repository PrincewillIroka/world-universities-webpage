import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center">
          <div className="text-xl font-semibold text-gray-700">
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-300"
            >
              <img src="/assets/logo.png" className="h-16 w-16" />
            </Link>
          </div>
          <nav className="mx-auto">
            <ul className="flex">
              {navItems.map((item) => (
                <li key={item.path} className="mr-8">
                  <Link
                    to={item.path}
                    className={`transition duration-300 ${
                      location.pathname === item.path
                        ? "text-pink-500 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
