import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Footer from "@/components/Footer";

const DynamicMap = dynamic(() => import("../components/Map"), { ssr: false });

export default function ContractUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await axios.post("/api/sendMail", formData);
      if (response.data.success) {
        setSuccess("Your message has been sent successfully.");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setError(
        "An error occurred while sending your message. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <section>
        <Navbar />
      </section>

      <section className="flex ">
        <div className="image-container h-auto lg:h-[600px] 2xl:h-[700px] w-screen overflow-hidden relative">
          <img src="/trinco.jpg" className="  brightness-50" alt="" />
          <div className="text-overlay absolute md:left-40 bottom-5 md:bottom-20 p-4">
            <h1
              style={{ lineHeight: "68px", fontFamily: "bagea" }}
              className="text-white max-w-2xl font-normal text-3xl md:text-7xl "
            >
              Contact us
            </h1>
          </div>
        </div>
      </section>

      <section>
        <img
          className="w-screen mt-[-10px] md:mt-[-30px] z-20 relative"
          src="/home2.png"
          alt=""
        />
      </section>

      <section>
        <div className=" flex items-center justify-center  p-4">
          <div className="bg-white  flex flex-col md:grid md:grid-cols-12 w-full gap-8 max-w-7xl">
            {/* Contact Form Section */}
            <div className="flex-1 md:grid md:col-span-7  p-6">
              <h2 className="text-2xl font-bold mb-4">Send Message</h2>
              {success && <p className="text-green-500 mb-4">{success}</p>}
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex-1">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name here"
                      className="mt-1 block w-full border-gray-300 bg-[#F2F2F2] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div className="flex-1 mt-4 md:mt-0">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your e-mail here"
                      className="mt-1 block w-full border-gray-300 bg-[#F2F2F2] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject"
                    className="mt-1 block w-full border-gray-300 rounded-md bg-[#F2F2F2] shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Type your message..."
                    className="mt-1 block w-full border-gray-300 rounded-md bg-[#F2F2F2] shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="bg-[#F7F3EE] rounded-lg shadow-md p-6 md:p-12 rounded-r-lg flex-1 md:col-span-5">
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-4">
                We love to hear from you! Whether you have questions about our
                tours, need assistance with planning your trip, or want to share
                your travel experiences, our team is here to help.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-600">Address colombo Sri Lanka</p>
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">0771234567 / 0779456123</p>
                </div>
                <div>
                  <h3 className="font-bold">E-Mail</h3>
                  <p className="text-gray-600">
                    <a href="mailto:taproscapes@Gmail.Com">
                      taproscapes@Gmail.Com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <DynamicMap />
      </div>

      <section
        style={{
          backgroundImage: 'url("/train.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-20 h-[265px] w-full brightness-75"
      >
        <div className="flex justify-center gap-8 py-24">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="mt-1 flex w-1/2 search-button cursor-pointer border-2 text-sm md:text-xl  xl:text-2xl border-gray-600 bg-white h-8 md:h-auto py-1 px-2 md:py-5 md:px-6 rounded-lg"
            required
          />
          <button className="border-2 border-gray-600 w-1/4 py-1 px-2 md:py-1 md:px-6 uppercase bg-tropicalRainForest text-[8px] md:text-sm lg:text-xl text-white rounded-lg">
            SUBSCRIBE OUR NEWSLETTER
          </button>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
