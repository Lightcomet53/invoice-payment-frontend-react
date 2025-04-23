import React from "react";

interface PaymentDetailsProps {
  label: string;
  value: string;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-2xl text-gray-600">{label}</span>
    <span className="text-2xl font-medium">{value}</span>
  </div>
);

export default PaymentDetails;
