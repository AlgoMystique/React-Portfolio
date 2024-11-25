import user_info from "../../data/user_info.js";

import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = (field, value) => {
    let error = "";

    if (!value) {
     
    } else if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = `${field} is required`;
    }

    return error;
  };

  const handleBlur = (field) => {
    const error = validateForm(field, formData[field]);
    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: validateForm(name, value) });
    }
  };

  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
        Let&apos;s Get in Touch:{" "}
        <span className="text-blue-800 dark:text-blue-500">
         Email Me
        </span>
      </h4>



      {/* =========== CONTACT FORM =========== */}
      <form className="mt-8">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={() => handleBlur("name")}
            className="block w-full p-2.5 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:text-zinc-100"
            placeholder="Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email")}
            className="block w-full p-2.5 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:text-zinc-100"
            placeholder="Your Email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-100"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur("message")}
            className="block w-full p-2.5 border border-zinc-300 rounded-lg dark:bg-zinc-800 dark:text-zinc-100"
            placeholder="Your Message"
            rows="4"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-800 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Submit
        </button>
      </form>

<div class="mt-12">
  <a href="/assets/resume.pdf" download="My_Resume.pdf" class="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-blue-600 transition-all duration-300 mt-4">
    <i class="fa fa-download self-center text-lg text-blue-800 dark:text-blue-500"></i>
    <span class="self-center">🦋Download My Resume🦋</span>
  </a>
</div>

      {/* =========== LINKS =========== */}
      <div className="mt-12">
        {/* =========== LINKEDIN =========== */}
        <a
          href={user_info.socials.linkedin}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-blue-600 transition-all duration-300 mt-4"
        >
          <FaLinkedin className="self-center text-lg text-blue-800 dark:text-blue-500" />
          <span className="self-center">Follow on LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
export default Contact; 