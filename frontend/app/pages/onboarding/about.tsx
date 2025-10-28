import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 font-sans">
      <Header />

      {/* About Section */}
      <section className="container mx-auto px-6 pt-28 pb-20 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            StoryCanvas
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            STORYCANVAS isn’t just a tool; it’s the future of clear documentation.
            We redefine software storytelling by blending technical precision with
            creative vision. Our platform uses NLP and RAG for deep context
            analysis, then deploys a powerful LLM to instantly generate a full
            project blueprint: INVEST User Stories, visual PlantUML Wireframes (PNG),
            and executable Gherkin Test Scenarios. STORYCANVAS stands as the constant
            force for clarity, empowering architects, developers, and visionaries to
            bridge the gap between idea and code with unmatched efficiency.
          </p>
        </div>

        {/* Right Illustration */}
        {/* Right Illustration with Gradient Accent */}
        <div className="flex-1 flex justify-center relative">
          {/* Gradient background blob */}
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-primary-500/20 via-purple-500/20 to-blue-500/30 rounded-full blur-3xl animate-pulse-slow" />

          {/* Logo */}
          <img
            src="/Logo_Story_Canvas.svg"
            alt="StoryCanvas Logo"
            className="w-80 h-auto relative z-10 drop-shadow-xl"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h2l3.6 7.59a1 1 0 00.93.61h7.92a1 1 0 00.93-.61L21 5H5m-2 0a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Contact & Help</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="font-medium mt-1">Phone: +88011122222</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12H8m0 0l4-4m-4 4l4 4M12 4v16"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Write To Us</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <div className="mt-1 text-sm">
                  <p>Emails: customer@exclusivle.com</p>
                  <p>support@exclusivle.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md p-3 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            ></textarea>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-md shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
