import React, { useState } from "react";
import Header from "./Header";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message to a server
    console.log("Message sent:", message);
    setIsSent(true);
    setMessage("");
  };

  return (
    <div>
      <Header />
      <div className="mt-10 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-pink-600 text-white p-6">
          <h1 className="text-3xl font-bold">
            World Universities - (ContactUs)
          </h1>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Please leave us a message and we'll get
            back to you as soon as possible.
          </p>
          {isSent ? (
            <div
              className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
              role="alert"
            >
              <p>Thank you for your message. We'll be in touch soon!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  className="h-12 w-60 mx-auto items-center px-4 py-2 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
