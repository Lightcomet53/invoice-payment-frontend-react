import React from "react";
import { PayFormType } from "../../types/interface";

// Import form components
import FormField from "../../components/FormComponents/FormField";
import CardForm from "../../components/FormComponents/CardForm";
import CountryRegionForm from "../../components/FormComponents/CountryRegionForm";
import SubmitButton from "../../components/FormComponents/SubmitButton";

interface PaymentFormProps {
  payForm: PayFormType;
  setPayForm: (form: PayFormType) => void;
  handleSubmit: () => void;
  isLoading: boolean;
}

/**
 * Payment form that collects credit card and billing information
 */
const PaymentForm: React.FC<PaymentFormProps> = ({
  payForm,
  setPayForm,
  handleSubmit,
  isLoading,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPayForm({
      ...payForm,
      [name]: value,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex items-center w-[580px] h-[700px]">
      <div className="mx-auto rounded-xl bg-white py-10 px-14 space-y-6">
        <FormField
          id="email"
          label="Email"
          name="email"
          type="email"
          value={payForm.email}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="email"
          required={true}
        />

        <CardForm
          cardNumber={payForm.cardNumber}
          expiryDate={payForm.expiryDate}
          cvc={payForm.cvc}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <FormField
          id="cardHolderName"
          label="Cardholder name"
          name="cardHolderName"
          placeholder="Full name on card"
          value={payForm.cardHolderName}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoComplete="cc-name"
          required={true}
        />

        <CountryRegionForm
          country={payForm.country}
          zipCode={payForm.zipCode}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <SubmitButton onClick={handleSubmit} isLoading={isLoading} />

        <p className="text-center text-gray-500 px-14 text-sm">
          By clicking Pay, you agree to the Link Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
