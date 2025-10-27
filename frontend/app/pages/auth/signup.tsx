import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  // ✅ Fungsi untuk menangani klik tombol Sign Up
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman
    navigate("/SignIn");  // Arahkan ke halaman Home
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex flex-grow min-h-[100vh]">
        {/* Left Section — Gradient Welcome */}
        <div className="w-1/2 flex flex-col justify-center items-start px-16 text-white bg-gradient animate-fade-in-up">
          <h1 className="text-6xl font-extrabold mb-4 leading-tight">
            WELCOME!
          </h1>
          <div className="w-16 h-1 bg-white rounded-full mb-6"></div>
          <p className="text-lg font-medium max-w-md">
            Where your ideas transform into visual stories. Begin<br />
            your journey from concept to clarity.
          </p>
        </div>

        {/* Right Section — Sign Up Form */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-white animate-fade-in-up">
          <div className="w-3/4 max-w-md">
            <h2 className="text-secondary font-bold text-2xl mb-2">StoryCanvas</h2>
            <h3 className="text-primary font-bold text-3xl mb-8">Sign Up</h3>

            {/* ✅ Tambahkan handler di form */}
            <form onSubmit={handleSignUp} className="flex flex-col space-y-6">
              {/* Email */}
              <div>
                <label className="block text-primary mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-primary mb-2 font-medium">Username</label>
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  className="w-full px-4 py-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-primary mb-2 font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>

              {/* Password Confirmation */}
              <div>
                <label className="block text-primary mb-2 font-medium">Password Confirmation</label>
                <input
                  type="password"
                  placeholder="Re-enter Your Password"
                  className="w-full px-4 py-3 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
              </div>

              {/* ✅ Tombol Sign Up */}
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-500 transition hover-lift"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{" "}
              <a href="/signin" className="text-primary hover:underline">
                Sign In!
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
