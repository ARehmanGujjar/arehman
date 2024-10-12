"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Thanks from "../conmponents/Thanks";

const Contact = () => {
  const [formdata, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [state, handleSubmit] = useForm("mrbgzkwj");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformData({ ...formdata, [e.target.name]: e.target.value });
  };
  if (state.succeeded) {
    return <Thanks/>;
}

  return (
    <>
      <section className="text-white rounded-xl mt-1 mx-1 body-font bg-[#14184B]">
        <div
          className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-6 md:py-24 mx-auto section"
          id="contact-form"
        >
          <div className="md:w-1/3 w-full">
            <h1 className="text-4xl text-slate-50 sm:text-4xl font-bold title-font mb-4">
              Contact Me
            </h1>
            <p className="leading-relaxed text-xl text-slate-50">
              I am here to assist you! If you have any questions or need
              assistance, please feel free to reach out to me.
              <br></br>
              You can also email me at
              <a
                href="mailto:contact@example.com"
                className="font-semibold border-b-4 border-green-400"
              >
                {" "}
                abdurrehman1722@gmail.com
              </a>
            </p>
          </div>
          <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
            <h1 className="text-4xl text-slate-50 sm:text-4xl font-bold title-font mb-4">
              Contact
            </h1>
            <form onSubmit={handleSubmit} action={"https://formspree.io/f/mrbgzkwj"} method="POST" id="submit-contact-form">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 py-4 text-lg text-slate-50"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="additional-name"
                    value={formdata.name}
                    onChange={(e) => handleChange(e)}
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 py-4 text-lg text-slate-50"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formdata.email}
                    onChange={(e) => handleChange(e)}
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 py-4 text-lg text-slate-50"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formdata.message}
                    onChange={(e) => handleChange(e)}
                    className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
                  ></textarea>
                  <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex  bg-slate-300 hover:text-slate-50 text-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
                >
                  Send Message ✉
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
