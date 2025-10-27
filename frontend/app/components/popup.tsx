import React from "react";
import { useNavigate } from "react-router-dom";

interface RequireLoginPopupProps {
  onClose: () => void;
}

export const RequireLoginPopup: React.FC<RequireLoginPopupProps> = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-[#4699DF] mb-3">
          Login Required
        </h2>

        <p className="text-gray-600 mb-8">
          You must be logged in to access this page.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/Signin")}
            className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-[#5F3D89] to-[#4699DF] hover:opacity-90 transition font-semibold"
          >
            Go to Sign In
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full border border-[#4699DF] text-[#4699DF] hover:bg-[#4699DF]/10 font-semibold transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
