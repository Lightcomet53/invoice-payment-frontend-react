import { useState } from "react";
import { PayFormType } from "../../types/interface";
import {
  isFormValid,
  isValidCardNumber,
  isValidEmail,
  isValidExpiryDate,
} from "../validation/validators";

// Default payment form data
const DEFAULT_PAYMENT_FORM: PayFormType = {
  email: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
  cardHolderName: "",
  country: "United States",
  zipCode: "",
};

/**
 * Hook for managing payment form state and validation
 */
export const usePaymentForm = () => {
  const [formData, setFormData] = useState<PayFormType>(DEFAULT_PAYMENT_FORM);

  const validateForm = (): string | null => {
    if (!isFormValid(formData)) {
      return "Please enter all fields!";
    }

    if (!isValidEmail(formData.email)) {
      return "Please enter a valid email address!";
    }

    if (!isValidCardNumber(formData.cardNumber)) {
      return "Please enter a valid card number";
    }

    if (!isValidExpiryDate(formData.expiryDate)) {
      return "Please enter a valid expiry date";
    }

    return null;
  };

  const resetForm = () => {
    setFormData(DEFAULT_PAYMENT_FORM);
  };

  return {
    formData,
    setFormData,
    validateForm,
    resetForm,
  };
};

export default usePaymentForm;
