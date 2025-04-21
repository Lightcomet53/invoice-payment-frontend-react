type StatusType = "normal" | "high" | "urgent" | "critical";

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

export const StatusBadge = ({ status }: { status: StatusType }) => {
  const { text, bg, dot } = statusStyles[status];

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${bg} ${text}`}
    >
      <span className={`w-2 h-2 mr-2 rounded-full ${dot}`}></span>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};
