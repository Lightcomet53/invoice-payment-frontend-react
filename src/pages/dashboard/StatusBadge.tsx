import React from "react";
import { StatusType } from "../../utils/constants/constants";

interface StatusBadgeProps {
  status: StatusType;
}

const statusStyles: Record<
  StatusType,
  { text: string; bg: string; dot: string }
> = {
  normal: {
    text: "text-gray-700",
    bg: "bg-gray-100",
    dot: "bg-gray-500",
  },
  high: {
    text: "text-yellow-600",
    bg: "bg-yellow-50",
    dot: "bg-yellow-500",
  },
  urgent: {
    text: "text-red-500",
    bg: "bg-red-50",
    dot: "bg-red-300",
  },
  critical: {
    text: "text-white",
    bg: "bg-red-500",
    dot: "bg-white",
  },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const { text, bg, dot } = statusStyles[status];
  const displayText = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div
      className={`inline-flex items-center px-2 py-1 rounded-[16px] text-xs font-medium ${bg} ${text}`}
    >
      <span className={`w-[6px] h-[6px] mr-2 rounded-full ${dot}`}></span>
      {displayText}
    </div>
  );
};

export default StatusBadge;
