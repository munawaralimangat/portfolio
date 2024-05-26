import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-slate-950 min-h-screen w-full">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-12 text-center">Contact Me</h2>
        <form className="bg-slate-900 rounded-lg shadow-lg hover:shadow-slate-800 p-8 space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-100 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 bg-slate-800 text-gray-100 rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-100 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 bg-slate-800 text-gray-100 rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-100 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="mt-1 p-3 bg-slate-800 text-gray-100 rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black hover:bg-slate-950 transition-colors duration-300 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

