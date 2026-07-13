import React, { useState } from "react";


const API_URL = "https://contact-backen-2.onrender.com/api/contact";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, website, message }),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setWebsite("");
      setMessage("");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
          Contact Us
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label htmlFor="website" className="mb-2 block text-sm font-medium text-gray-700">
              Website Link
            </label>
            <input
              type="url"
              id="website"
              placeholder="https://example.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-800 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-green-800 hover:border-2 hover:border-green-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;