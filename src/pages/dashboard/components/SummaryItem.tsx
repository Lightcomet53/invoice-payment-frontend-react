import React from "react";

interface SummaryItemProps {
  label: string;
  value: string;
  highlight?: boolean;
  isInvoice?: boolean;
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  label,
  value,
  highlight = false,
  isInvoice = false,
}) => (
  <tr>
    <td
      align={isInvoice ? "left" : "right"}
      className={`py-2 ${
        highlight ? "font-medium text-gray-700" : "text-gray-600"
      }`}
    >
      {label}
    </td>
    <td
      align="right"
      className={`py-2 ${
        highlight ? "font-medium text-gray-700" : "text-gray-600"
      }`}
    >
      {value}
    </td>
  </tr>
);

export default SummaryItem;
