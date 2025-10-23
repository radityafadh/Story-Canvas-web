// frontend/src/pages/onboarding/home.tsx
import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold">Welcome to Story Canvas</h1>
      </main>
      <Footer />
    </div>
  );
}
