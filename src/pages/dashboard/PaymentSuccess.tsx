import React from "react";
import {
  formatDisplayDateTime,
  priceFormat,
} from "../../utils/helpers/formatting";
import { paymentProcessingFee } from "../../utils/constants/constants";
import PaymentDetails from "./components/PaymentDetails";
import SuccessIcon from "./components/SuccessIcon";

interface PaymentData {
  amount: number;
  createdAt: string;
  refNumber: string;
}

interface PaymentSuccessProps {
  paymentResponse: {
    message: string;
    data: PaymentData;
  };
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ paymentResponse }) => {
  const { data } = paymentResponse;
  const fee = data.amount * paymentProcessingFee;

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-10">
        <SuccessIcon />
        <h2 className="text-2xl font-bold text-gray-800">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mt-2">Reference: {data.refNumber}</p>
      </div>

      <div className="space-y-6">
        <PaymentDetails
          label="Payment Time"
          value={formatDisplayDateTime(data.createdAt)}
        />

        <hr className="border-[1px] border-dashed border-gray-200 my-10" />

        <PaymentDetails label="Amount" value={priceFormat(data.amount)} />

        <PaymentDetails label="Fee" value={priceFormat(fee)} />

        <PaymentDetails label="Total" value={priceFormat(data.amount + fee)} />
      </div>
    </div>
  );
};

export default PaymentSuccess;
