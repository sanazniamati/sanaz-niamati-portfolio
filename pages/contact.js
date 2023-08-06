"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import AnimatedText from "@/components/AnimatedText";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <Head>
        <title>SanazNiamati | Contact Us Page</title>
        <meta name="description" content="any description" />
      </Head>

      <main className={"w-full "}>
        <Layout className={"flex gap-4 bg-white pt-4 mt-2"}>
          <div className={"w-1/2 "}>
            <AnimatedText text={"CONTACT ME"} className="mb-16  text-5xl" />
            <div className={"flex gap-2 items-center"}>
              <BsFillTelephoneOutboundFill size={28} />
              <div className={"px-4 py-4 font-bold text-2xl"}> 09384997337</div>
            </div>
            <div className={"flex gap-2 items-center"}>
              <HiOutlineMail size={38} />
              <div className={"px-4 py-4 font-bold text-2xl"}>
                sanaz.niamati@yahoo.com
              </div>
            </div>
          </div>
          <div
            className={"w-1/2 flex flex-col bg-gray-100 px-8 pb-4 rounded-lg"}
          >
            {/*<div*/}
            {/*  className={"flex justify-center items-center font-bold text-3xl"}*/}
            {/*>*/}
            {/*  Contact Me*/}
            {/*</div>*/}
            <form
              onSubmit={handleSubmit}
              className=" py-4 mt-4 flex flex-col gap-5"
            >
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  type="text"
                  id="fullname"
                  placeholder="sanaz niamati"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="email"
                  placeholder="sanaz@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className="h-32"
                  id="message"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                className={"bg-[#48b555] p-3 text-white font-bold"}
                type="submit"
              >
                Send
              </button>
            </form>

            <div className="bg-slate-100 flex flex-col">
              {error &&
                error.map((e, index) => (
                  <div
                    key={index}
                    className={`${
                      success ? "text-green-800" : "text-red-600"
                    } px-5 py-2`}
                  >
                    {e}
                  </div>
                ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
