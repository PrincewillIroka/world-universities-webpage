import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-pink-600 text-white p-6">
          <h1 className="text-3xl font-bold">World Universities</h1>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            World Universities is an app that provides you with information
            about thousands of universities around the world.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Features</h2>
          <ul className="mb-8">
            <li className="text-gray-700 mb-4">
              Provide users with information about thousands of universities
              around the world.
            </li>
            <li className="text-gray-700 mb-4">
              Users can access the official websites of these institutions.
            </li>
            <li className="text-gray-700 mb-4">
              Users can add universities to their favourites tab.
            </li>
            <li className="text-gray-700 mb-4">
              Users can also make suggestions for universities to be added to
              the app (Note: We'll properly review every suggestion before
              adding it).
            </li>
          </ul>
          <p className="text-gray-700 mb-4 text-sm">
            <b>Disclaimer:</b> This app is intended for informational purposes
            only, you could still make a proper search online for any
            information you find here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
