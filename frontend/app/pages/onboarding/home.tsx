import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="header-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-6 pt-32 pb-44 flex flex-col md:flex-row items-center justify-between gap-16 max-w-6xl">
          {/* Left text content */}
          <div className="flex-1 animate-fade-in-up text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">StoryCanvas</h1>
            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Stop writing documentation the slow way.{" "}
              <strong>STORYCANVAS</strong> is the AI engine that turns your rough
              project ideas into professional, collaborative blueprints instantly.
              Generate user stories, visual Figma-like wireframes (PNG), and clean
              developer-ready documentation — all in minutes.
            </p>
            <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg shadow-md hover:bg-primary-100 transition">
              Try It Now →
            </button>
          </div>

          {/* Right logo graphic */}
          <div className="flex-1 flex justify-center animate-fade-in-up">
            <img
              src="/Logo_Story_Canvas.svg"
              alt="StoryCanvas Logo"
              className="w-80 h-auto drop-shadow-lg"
            />
          </div>
        </div>

        {/* Full-Screen Gentle Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-10">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-[25vh] md:h-[35vh] lg:h-[40vh]"
          >
            <path
              fill="#ffffff"
              d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,197.3C1200,181,1320,171,1380,170.7L1440,171V320H0Z"
            />
          </svg>
        </div>
      </section>

      {/* How It Works Section */}
      <main className="flex-grow container mx-auto px-6 py-20 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
            How It Works:
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            From Idea to Artifacts in Minutes
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "Step 1",
              title: "Tell Your Story",
              text: "Simply type or paste your project requirements, goals, and context into StoryCanvas. Don’t worry about structure — use natural language.",
            },
            {
              step: "Step 2",
              title: "AI Core Analysis (NLP + RAG)",
              text: "StoryCanvas extracts key elements, identifies documentation patterns, and generates accurate user flows and entities.",
            },
            {
              step: "Step 3",
              title: "Auto-Generate Artifacts (LLM)",
              text: "Large Language Models generate professional stories, visual wireframes, and design mockups instantly.",
            },
            {
              step: "Step 4",
              title: "Refine & Export",
              text: "Review, refine, and export your generated artifacts as high-fidelity documentation or design assets.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 hover-lift text-center"
            >
              <div className="text-secondary-500 font-semibold text-lg mb-2">
                {item.step}
              </div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* FAQ Section */}
      <section className="bg-secondary-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center mb-10">
          <h3 className="text-3xl font-bold text-secondary-600">FAQ</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
            Questions?{" "}
            <span className="font-semibold text-primary-600">Look here.</span>
          </p>
        </div>

        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-4">
            {[
              {
                q: "What types of diagrams can it generate?",
                a: "User stories, flow diagrams, wireframes, and high-level design artifacts.",
              },
              {
                q: "Do I need to know UML to use this?",
                a: "No, just type your requirements in natural language. StoryCanvas handles the rest.",
              },
              {
                q: "Can I edit the diagrams after they are generated?",
                a: "Yes, you can edit or regenerate wireframes and documentation anytime.",
              },
              {
                q: "Is it free?",
                a: "StoryCanvas offers a free tier with basic features, and pro tiers for teams.",
              },
              {
                q: "How do you handle my data and privacy?",
                a: "Your data stays private and encrypted; StoryCanvas never trains models on your data.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-left"
              >
                <summary className="cursor-pointer font-medium text-primary-600">
                  {faq.q}
                </summary>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
