// frontend/src/pages/onboarding/home.tsx
import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function Halaman() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold">Halaman</h1>
      </main>
      <Footer />
    </div>
  );
}
