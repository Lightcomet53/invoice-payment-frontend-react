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
  const [errors, setErrors] = useState<string | null>(null);

  const validateForm = (): boolean => {
    if (!isFormValid(formData)) {
      setErrors("Please enter all fields!");
      return false;
    }

    if (!isValidEmail(formData.email)) {
      setErrors("Please enter a valid email address!");
      return false;
    }

    if (!isValidCardNumber(formData.cardNumber)) {
      setErrors("Please enter a valid card number");
      return false;
    }

    if (!isValidExpiryDate(formData.expiryDate)) {
      setErrors("Please enter a valid expiry date");
      return false;
    }

    setErrors(null);
    return true;
  };

  const resetForm = () => {
    setFormData(DEFAULT_PAYMENT_FORM);
    setErrors(null);
  };

  return {
    formData,
    setFormData,
    errors,
    validateForm,
    resetForm,
  };
};

export default usePaymentForm;
