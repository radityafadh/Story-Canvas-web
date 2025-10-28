// frontend/src/pages/onboarding/input-project.tsx
import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { NavLink } from "react-router-dom";


export default function InputProject() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main className="flex-grow px-8 py-10 max-w-4xl mx-auto animate-fade-in-up relative pb-32">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-900 dark:text-gray-100">
          Input Your Project Description!
        </h1>

        {/* Main Goal */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Main Goal</h2>
          <textarea
            placeholder="Ex: Help individuals manage their finances, track expenses, and make smarter investment decisions through AI-driven insights and automation."
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
            rows={3}
          />
        </section>

        {/* Users */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <textarea
            placeholder="Ex: Individual Users, Financial Advisors, Investment Managers, Administrators"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
            rows={2}
          />
        </section>

        {/* Fitur */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Fitur</h2>
          <textarea
            placeholder="Ex: Automated expense tracking and categorization, AI-driven budgeting and savings recommendations, Personalized investment portfolio suggestions, Real-time stock/crypto tracking, Risk analysis and alerts, Financial advisor integration for premium users"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
            rows={3}
          />
        </section>

        {/* Alur */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Alur</h2>
          <textarea
            placeholder="Ex: User links bank accounts and wallets → System tracks and categorizes transactions → AI generates budget plan and savings insights → User receives investment suggestions → Portfolio performance monitored → Advisors provide optional expert feedback"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
            rows={3}
          />
        </section>

        {/* Scope */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scope</h2>
          <textarea
            placeholder="Ex: Focuses on personal finance and investment guidance for individuals, not on corporate finance management or full-scale banking operations."
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
            rows={2}
          />
        </section>

        {/* Informasi Tambahan */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Informasi Tambahan</h2>
          <textarea
            placeholder="Ex: Focuses on personal finance and investment guidance for individuals, not on corporate finance management or full-scale banking operations."
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-400"
            rows={2}
          />
        </section>

        {/* Submit Button (Bottom Right, well-spaced) */}
       <div className="absolute bottom-10 right-12">
      <NavLink
        to="/UserStoryPage"
        end
        className={({ isActive }) =>
          [
            "bg-gradient text-white font-semibold px-8 py-3 rounded-full shadow-md inline-block hover-lift",
            isActive ? "ring-2 ring-white/30" : ""
          ].join(" ")
        }
      >
        Submit Project
      </NavLink>
    </div>
      </main>

      <Footer />
    </div>
  );
}
