"use client";
import React, { useState, useRef } from "react";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Email() {
  const [emailSubmited, setEmailSubmited] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xhmhzgt",
        "template_vmx7z78",
        form.current,
        "-uphjJah281Tr9r6Z"
      )
      .then(
        (result) => {
          setEmailSubmited(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <div className="text-xl font-bold text-white my-2">
          <h5>Let&apos;s Connect</h5>
        </div>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          estoy en busca de nuevas oportunidades, si te gustaria contactar
          conmigo o tienes alguna pregunta puedes enviarme un mensaje y te
          respondere lo mas rapido que pueda.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="linkedin.com">
            <ImLinkedin />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder:-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
              placeholder="Jhon Doe"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="user_email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="user_email"
              type="email"
              id="user_email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder:-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
              placeholder="jhon.doe@gmail.com"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="message"
              className="text-white block mb-1 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder:-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-800 hover:bg-primary-600 text-white font-medium py-2 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmited && (
            <p className=" text-green-600 text-sm mt-2">
              Email sent succesfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
