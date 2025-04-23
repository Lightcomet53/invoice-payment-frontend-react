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
    <div className="w-[580px] h-[700px] flex items-center">
      <div className="w-full">
        <div className="flex flex-col items-center mb-[106px]">
          <SuccessIcon />
          <h2 className="text-[26px] text-gray-800 mt-[26px]">
            Payment Successful!
          </h2>
          <h1 className="text-[40px] font-medium">
            {priceFormat(data.amount + fee)}
          </h1>
        </div>

        <div>
          <PaymentDetails
            label="Payment Time"
            value={formatDisplayDateTime(data.createdAt)}
          />
          <PaymentDetails
            label="Ref Number"
            value={formatDisplayDateTime(data.refNumber)}
          />

          <hr className="border-[1px] border-dashed border-gray-200 my-[26px]" />

          <PaymentDetails label="Amount" value={priceFormat(data.amount)} />

          <PaymentDetails label="Fee" value={priceFormat(fee)} />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
