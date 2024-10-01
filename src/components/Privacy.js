import React from "react";
import Header from "./Header";

const Privacy = () => {
  return (
    <div>
      <Header />
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-pink-600 text-white p-6">
          <h1 className="text-3xl font-bold">
            World Universities - (Privacy Policy)
          </h1>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            World Universities app takes your privacy seriously. This policy
            outlines how we collect, use, and protect your data.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Information Collection
          </h2>
          <p className="text-gray-700 mb-4">
            We do not collect any personal information when you use the app.
          </p>
          <p className="text-gray-700 mb-4">
            We only ask you to make an optional suggestion for universities that
            you may want us to add to the app.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Use of Information
          </h2>
          <p className="text-gray-700 mb-4">
            We properly review every suggestion you make to find out more about
            that university, before adding it to the app.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Data Protection
          </h2>
          <p className="text-gray-700 mb-4">
            The suggestions you make are deleted after we have received and
            reviewed it.
          </p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Rights
          </h2>
          <p className="text-gray-700 mb-4">
            You also have the right to access, correct, or delete your
            suggestion at any time. Please contact us if you wish to exercise
            these rights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
