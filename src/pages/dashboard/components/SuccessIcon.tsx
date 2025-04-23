import React from "react";

const SuccessIcon: React.FC = () => (
  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
    <svg
      className="w-8 h-8 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
);

export default SuccessIcon;
