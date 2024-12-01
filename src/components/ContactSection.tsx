import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = "service_00q08nx";
    const templateId = "template_vxh2bce";
    const publicKey = "RangQirxz7qDxImwD";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    // Sending email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("There was an issue sending your message. Please try again.");
      });
  };

  return (
    <div
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#161513] overflow-hidden text-white"
    >
      <div>
        {/* Background Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 rounded-full"></div>
      </div>
      <div
        className="flex flex-col sm:flex-row items-center justify-center rounded-lg backdrop-blur-md bg-gradient-to-b from-[rgba(102,51,204,0.25)] to-[rgba(140,34,206,0.45)] w-5/6 sm:w-4/5 p-6 sm:p-8"
        style={{
          boxShadow: "5px 5px 250px #6e00ff38",
        }}
      >
        {/* Contact Info Section */}
        <div className="w-full sm:w-1/2 p-4 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get in touch</h2>
          <p className="mb-4 text-xl sm:text-2xl">
            I’m very approachable and would love to speak to you. Feel free to
            call or send me an email, I'm always available.
          </p>
          <div className="mt-6 sm:mt-12 space-y-4">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p className="text-white text-lg ml-4">(443)-695-5839</p>
            </div>

            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href="mailto:MeirSoskil@gmail.com"
                className="underline ml-4 text-lg"
              >
                MeirSoskil@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full sm:w-1/2 p-4 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Send me a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 bg-[#d582ff30] text-white rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-[#d582ff30] text-white rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-4 bg-[#d582ff30] text-white rounded-md"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 bg-[#d582ff30] text-white rounded-md h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-md hover:from-purple-700 hover:to-pink-600 transition-all duration-500 hover:opacity-90 "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
