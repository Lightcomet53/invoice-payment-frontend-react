import React, { useState, useEffect } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

interface CardFormProps {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const CardForm: React.FC<CardFormProps> = ({
  cardNumber,
  expiryDate,
  cvc,
  onChange,
  onKeyDown,
}) => {
  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  const [formattedCardNumber, setFormattedCardNumber] = useState<string>("");
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const digitsOnly = cardNumber.replace(/\D/g, "");
    const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, "$1 ");
    setFormattedCardNumber(formatted);
  }, [cardNumber]);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");

    const customEvent = {
      ...e,
      target: {
        ...e.target,
        name: "cardNumber",
        value: value,
      },
    };
    onChange(customEvent);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const customEvent = {
      ...e,
      target: {
        ...e.target,
        name: "expiryDate",
        value: e.target.value,
      },
    };
    onChange(customEvent);
  };

  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const customEvent = {
      ...e,
      target: {
        ...e.target,
        name: "cvc",
        value: e.target.value,
      },
    };
    onChange(customEvent);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  const getContainerStyle = () => {
    if (focused) {
      return "rounded-md border border-indigo-500 shadow-sm overflow-hidden ring-1 ring-indigo-500";
    }
    return "rounded-md border border-gray-300 shadow-sm overflow-hidden";
  };

  return (
    <div>
      <label
        htmlFor="cardNumber"
        className="block font-medium text-gray-600 mb-1"
      >
        Card information
      </label>

      <div>
        <div className={getContainerStyle()}>
          <div className="relative border-b border-gray-200">
            <input
              {...getCardNumberProps({
                onChange: handleCardNumberChange,
                onKeyDown: handleKeyDown,
                onFocus: () => handleFocus("cardNumber"),
                onBlur: handleBlur,
              })}
              id="cardNumber"
              placeholder="Card number"
              className="w-full px-3 py-2 focus:outline-none border-none"
              autoComplete="cc-number"
              value={formattedCardNumber}
            />
            <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
              <div className="flex items-center gap-1">
                <svg
                  {...getCardImageProps({ images })}
                  width="24"
                  height="16"
                />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2 relative border-r border-gray-200">
              <input
                {...getExpiryDateProps({
                  onChange: handleExpiryChange,
                  onKeyDown: handleKeyDown,
                  onFocus: () => handleFocus("expiryDate"),
                  onBlur: handleBlur,
                  value: expiryDate,
                })}
                id="expiryDate"
                placeholder="MM / YY"
                className="w-full px-3 py-2 focus:outline-none border-none"
                autoComplete="cc-exp"
              />
            </div>
            <div className="w-1/2 relative">
              <input
                {...getCVCProps({
                  onChange: handleCVCChange,
                  onKeyDown: handleKeyDown,
                  onFocus: () => handleFocus("cvc"),
                  onBlur: handleBlur,
                  value: cvc,
                })}
                id="cvc"
                placeholder="CVC"
                className="w-full px-3 py-2 pr-10 focus:outline-none border-none"
                autoComplete="cc-csc"
              />
              <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="15"
                    rx="1.5"
                    fill="#F7F7F7"
                    stroke="#DDDDDD"
                  />
                  <circle cx="17" cy="8" r="3.5" fill="#AAAAAA" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {meta.isTouched && (!cardNumber || cardNumber.trim() === "") && (
          <p className="text-red-500 text-sm mt-1">Enter a card number</p>
        )}
      </div>
    </div>
  );
};

export default CardForm;
