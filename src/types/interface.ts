export interface InvoiceType {
  id: string;
  vendor: string;
  currency: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  priority: string;
}

export interface PayFormType {
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  cardHolderName: string;
  country: string;
  zipCode: string;
}

export interface PaymentResponseType {
  message: string;
  data: {
    amount: number;
    refNumber: string;
    createdAt: string;
  };
}
