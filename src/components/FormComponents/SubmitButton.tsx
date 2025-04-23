import React from "react";

interface SubmitButtonProps {
  onClick: () => void;
  isLoading: boolean;
  text?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  isLoading,
  text = "Pay",
}) => {
  return (
    <button
      className="w-full rounded-md bg-[#182146] text-white h-[48px] flex items-center justify-center font-medium transition hover:bg-[#0e1328] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={onClick}
      disabled={isLoading}
      type="button"
      aria-busy={isLoading}
    >
      {isLoading ? <span className="loader"></span> : text}
    </button>
  );
};

export default SubmitButton;
