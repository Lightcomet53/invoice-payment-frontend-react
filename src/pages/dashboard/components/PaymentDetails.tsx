import React from "react";

interface PaymentDetailsProps {
  label: string;
  value: string;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ label, value }) => (
  <div className="flex justify-between mb-[9px]">
    <span className="text-[22px] text-gray-600">{label}</span>
    <span className="text-[22px] font-medium">{value}</span>
  </div>
);

export default PaymentDetails;
