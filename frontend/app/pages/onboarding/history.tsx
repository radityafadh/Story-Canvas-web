import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Search, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ React Router DOM version

export function History() {
  const navigate = useNavigate();

  // Contoh data dummy (bisa diganti dengan API atau loader Remix)
  const chats = [
    { id: 1, name: "Marketing Plan", summary: "Discussing Q4 ideas...", date: "24 Jan" },
    { id: 2, name: "Product Roadmap", summary: "Brainstorming session...", date: "23 Jan" },
    { id: 3, name: "Team Check-in", summary: "Weekly progress update...", date: "20 Jan" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-gray-800">
      <Header />

      <main className="flex-grow px-8 md:px-24 lg:px-36 py-16 animate-fade-in-up">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black">
          Search your chats
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-3xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Enter a search term"
            className="w-full py-4 pl-6 pr-14 rounded-full bg-gray-900 text-white text-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-secondary-500 hover:bg-secondary-600 p-3 rounded-full transition">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>

        <p className="text-center text-gray-400 mb-10">
          Search by name or summary
        </p>

        {/* Chat History List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => navigate(`/Chat`)} // 👈 Route ke halaman Chat
              className="flex items-start justify-between border-b border-gray-200 pb-4 hover:bg-primary-50 cursor-pointer transition duration-200 px-2 rounded-md"
            >
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded-md">
                  <MessageSquare className="w-7 h-7 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 hover:text-primary-500 transition">
                    {chat.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{chat.summary}</p>
                </div>
              </div>
              <span className="text-gray-500 text-sm whitespace-nowrap">{chat.date}</span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between max-w-4xl mx-auto mt-10 text-sm text-gray-500">
          <span>1 - 10 of 123</span>
          <button className="text-secondary-500 font-medium hover:underline">
            Load more
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
