import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_z2xd3w4', 'template_rh3k5h2', form.current, {
        publicKey: 'QxqvT2obTeFjQo4ya',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <section className="py-16 bg-gradient-to-r from-black to-slate-950 min-h-screen w-full">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-8 text-center">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="bg-slate-900 rounded-lg shadow-lg hover:shadow-slate-800 p-10 space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 font-medium ml-2 text-left">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="mt-1 p-2 bg-slate-800 text-gray-300 rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-100 font-medium ml-2 text-left">Email</label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="mt-1 p-2 bg-slate-800 text-gray-300 rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-100 font-medium  ml-2 text-left">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 bg-slate-800 text-gray-100 rounded border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black hover:bg-slate-950 transition-colors duration-300 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
