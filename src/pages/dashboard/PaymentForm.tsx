import React from "react";
import { PayFormType } from "../../lib/interface";

import {
  formatCardNumber,
  formatCvc,
  formatExpiry,
  formatZip,
} from "../../utils/format";

interface PropsType {
  payForm: PayFormType;
  setPayForm: (arg: PayFormType) => void;
  handleSubmit: () => void;
  isLoading: boolean;
}

const PaymentForm: React.FC<PropsType> = ({
  payForm,
  setPayForm,
  handleSubmit,
  isLoading,
}) => {
  const handleChange = (e: any) => {
    setPayForm({
      ...payForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center w-[580px] h-[700px]">
      <div className="mx-auto rounded-xl bg-white py-10 px-14 space-y-6">
        {/* Email */}
        <div>
          <label className="block  font-medium text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
            value={payForm.email}
            onChange={handleChange}
          />
        </div>

        {/* Card Info */}
        <div>
          <label className="block  font-medium text-gray-600 mb-1">
            Card information
          </label>

          <div className="relative w-full rounded-md border border-gray-300 shadow-sm">
            {/* Card Number */}
            <input
              type="text"
              name="cardNumber"
              pattern="\d{13,19}"
              placeholder="1234 1234 1234 1234"
              className="w-full px-3 py-2 border-none focus:outline-none rounded-t-md"
              value={formatCardNumber(payForm.cardNumber)}
              onChange={handleChange}
            />

            {/* Expiry + CVC */}
            <div className="flex">
              <input
                type="text"
                placeholder="MM / YY"
                name="expiryDate"
                pattern="(0[1-9]|1[0-2])\/\d{2}"
                className="w-1/2 px-3 py-2 border-t border-gray-200 focus:outline-none rounded-bl-md border-r"
                value={formatExpiry(payForm.expiryDate)}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="CVC"
                name="cvc"
                className="w-1/2 px-3 py-2 border-t border-gray-200 focus:outline-none rounded-br-md"
                value={formatCvc(payForm.cvc)}
                onChange={handleChange}
              />
            </div>

            {/* Card Icons */}
            <div className="absolute right-3 top-[3px] flex space-x-1">
              <img
                src="/assets/images/payment-image.png"
                alt="Visa"
                className="h-9"
              />
            </div>
          </div>
        </div>

        {/* Name on Card */}
        <div>
          <label className="block  font-medium text-gray-600 mb-1">
            Cardholder name
          </label>
          <input
            type="text"
            placeholder="Full name on card"
            name="cardHolderName"
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
            value={payForm.cardHolderName}
            onChange={handleChange}
          />
        </div>

        {/* Country & ZIP */}
        <div>
          <label className="block  font-medium text-gray-600 mb-1">
            Country or region
          </label>
          <div className="relative w-full rounded-md border border-gray-300 shadow-sm">
            <div className="relative">
              <select
                className="appearance-none w-full cursor-pointer rounded-md border-b rounded-b-none border-gray-300 px-3 py-2 shadow-sm focus:outline-none"
                name="country"
                onChange={handleChange}
              >
                <option>United States</option>
                <option>Canada</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-800">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="ZIP"
              name="zipCode"
              className="w-full rounded-md px-3 py-2 shadow-sm focus:outline-none"
              value={formatZip(payForm.zipCode)}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Pay Button */}
        <button
          className="w-full rounded-md bg-[#182146] text-white h-[48px] flex items-center justify-center font-medium transition"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <span className="loader"></span> : "Pay"}
        </button>

        {/* Disclaimer */}
        <p className="text-center text-gray-500 px-14">
          By clicking Pay, you agree to the Link Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
