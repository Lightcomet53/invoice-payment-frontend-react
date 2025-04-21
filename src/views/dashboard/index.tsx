import { useState } from "react";
import Container from "../../container";
import { formatDate, priceFormat } from "../../utils/format";
import InvoiceTable from "./InvoiceTable";
import PaymentSummary from "./PaymentSummary";
import Dialog from "rc-dialog";
import PaymentForm from "./PaymentForm";
import PaymentSuccess from "./PaymentSuccess";
import invoiceData from "../../data/invoices.json";
import {
  InvoiceType,
  PayFormType,
  PaymentResponseType,
} from "../../lib/interface";
import {
  isFormValid,
  isValidCardNumber,
  isValidEmail,
  isValidExpiryDate,
} from "../../utils/validation";
import axios from "axios";
import { getTotalInvoiceAmount } from "../../utils/calculator";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paymentResponse, setPaymentResponse] = useState<PaymentResponseType>({
    message: "",
    data: {
      amount: 0,
      createdAt: "",
      refNumber: "",
    },
  });
  const [payForm, setPayForm] = useState<PayFormType>({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardHolderName: "",
    country: "United States",
    zipCode: "",
  });
  const [invoices, setInvoices] = useState<InvoiceType[]>(invoiceData);
  const [selectedInvoices, setSelectedInvoices] = useState<InvoiceType[]>([]);

  const handleOpen = () => {
    if (selectedInvoices.length === 0) {
      return alert("Please select invoices!");
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsSuccess(false);
  };

  const handleSubmit = async () => {
    if (!isFormValid(payForm)) return alert("Please enter all fields!");
    if (!isValidEmail(payForm.email))
      return alert("Please enter a valid email address!");
    if (!isValidCardNumber(payForm.cardNumber))
      return alert("Please enter a valid card number");
    if (!isValidExpiryDate(payForm.expiryDate))
      return alert("Please enter a valid expiry date");

    const data = {
      ...payForm,
      invoices: selectedInvoices.map((item) => ({ id: item.id })),
      amount: selectedInvoices.reduce((total, item) => total + item.amount, 0),
    };
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/payment/create`,
        data
      );
      setPaymentResponse(res.data);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Container>
      <h4 className="font-bold text-xl">INVOICES TO PAY</h4>

      <hr />

      <div className="flex justify-end mt-4 mb-6">
        <div className="bg-[#F5F5F5] flex items-center w-[400px] justify-between py-2 px-4 rounded-md">
          <div className="mr-20">
            <p className="text-gray-600">Total amount to pay</p>
            <p className="text-gray-600">{formatDate(Date.now())}</p>
          </div>
          <span className="text-2xl text-gray-600 font-medium">
            {priceFormat(getTotalInvoiceAmount(invoices))}
          </span>
        </div>
      </div>

      <InvoiceTable
        invoices={invoices}
        setSelectedInvoices={setSelectedInvoices}
      />

      <PaymentSummary selectedInvoices={selectedInvoices} />

      <div className="flex justify-end pt-6">
        <button
          className="bg-[#442D95] w-[400px] h-[60px] flex justify-center items-center rounded-md text-white text-2xl"
          onClick={handleOpen}
        >
          Pay{" "}
          {priceFormat(
            getTotalInvoiceAmount(selectedInvoices)
          )}
        </button>
      </div>

      <Dialog
        visible={open}
        onClose={handleClose}
        closeIcon={false}
        width="auto"
        height="auto"
        maskAnimation="fade"
        animation="zoom"
        classNames={{
          wrapper: "flex items-center",
        }}
        className="items-center"
      >
        {!isSuccess ? (
          <PaymentForm
            payForm={payForm}
            setPayForm={setPayForm}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        ) : (
          <PaymentSuccess paymentResponse={paymentResponse} />
        )}
      </Dialog>
    </Container>
  );
};
export default Dashboard;
