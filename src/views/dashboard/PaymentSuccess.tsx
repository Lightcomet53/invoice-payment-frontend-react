import React from "react";
import { formatDateAndTime, priceFormat } from "../../utils/format";
import { PaymentResponseType } from "../../lib/interface";

interface PropsType {
  paymentResponse: PaymentResponseType;
}

const PaymentSuccess: React.FC<PropsType> = ({ paymentResponse }) => {
  const fee = 0.001;

  return (
    <div className="flex items-center w-[580px] h-[700px]">
      <div className="bg-white rounded-lg pt-12 pb-20 px-2 w-full">
        <div className="flex justify-center items-center mb-6">
          <svg
            width="94"
            height="94"
            viewBox="0 0 94 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="47.3109"
              cy="46.631"
              r="46.631"
              fill="#23A26D"
              fillOpacity="0.12"
            />
            <path
              d="M46.4781 24.4257C34.243 24.4257 24.2728 34.3958 24.2728 46.6309C24.2728 58.866 34.243 68.8361 46.4781 68.8361C58.7131 68.8361 68.6833 58.866 68.6833 46.6309C68.6833 34.3958 58.7131 24.4257 46.4781 24.4257ZM57.0922 41.5237L44.5018 54.1141C44.1909 54.4249 43.769 54.6026 43.3249 54.6026C42.8808 54.6026 42.4589 54.4249 42.148 54.1141L35.864 47.83C35.22 47.186 35.22 46.1202 35.864 45.4762C36.5079 44.8323 37.5738 44.8323 38.2177 45.4762L43.3249 50.5834L54.7384 39.1699C55.3824 38.526 56.4482 38.526 57.0922 39.1699C57.7361 39.8139 57.7361 40.8575 57.0922 41.5237Z"
              fill="#23A26D"
            />
          </svg>
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-6">
          {paymentResponse.message}
        </h2>
        <div className="text-center mb-40">
          <span className="text-4xl font-bold">
            {priceFormat(paymentResponse.data.amount * (1 + fee))}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-2xl text-gray-600">Ref Number</span>
          <span className="text-2xl font-medium">
            {paymentResponse.data.refNumber}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-2xl text-gray-600">Payment Time</span>
          <span className="text-2xl font-medium">
            {formatDateAndTime(paymentResponse.data.createdAt)}
          </span>
        </div>
        <hr className="border-[1px] border-dashed border-gray-200 my-10" />
        <div className="flex justify-between">
          <span className="text-2xl text-gray-600">Amount</span>
          <span className="text-2xl font-medium">
            {priceFormat(paymentResponse.data.amount)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-2xl text-gray-600">Fee</span>
          <span className="text-2xl font-medium">
            {priceFormat(paymentResponse.data.amount / 1000)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
