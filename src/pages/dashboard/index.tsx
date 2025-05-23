import { useState, useMemo } from "react";
import AppLayout from "../../components/layout/AppLayout";
import { formatDisplayDate, priceFormat } from "../../utils/helpers/formatting";
import InvoiceTable from "./InvoiceTable";
import PaymentSummary from "./PaymentSummary";
import Dialog from "rc-dialog";
import PaymentForm from "./PaymentForm";
import PaymentSuccess from "./PaymentSuccess";
import invoiceData from "../../data/mocks/invoices.json";
import { InvoiceType, PaymentResponseType } from "../../types/interface";
import axios from "axios";
import { getTotalInvoiceAmount } from "../../utils/helpers/invoiceCalculator";
import usePaymentForm from "../../utils/hooks/usePaymentForm";

const Dashboard = () => {
  // Payment dialog state
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  // Invoice state management
  const [availableInvoices] = useState<InvoiceType[]>(invoiceData);
  const [selectedInvoicesForPayment, setSelectedInvoicesForPayment] = useState<
    InvoiceType[]
  >([]);

  // Payment form and validation
  const { formData, setFormData, validateForm, resetForm } =
    usePaymentForm();

  // Payment response
  const [paymentResult, setPaymentResult] = useState<PaymentResponseType>({
    message: "",
    data: {
      amount: 0,
      createdAt: "",
      refNumber: "",
    },
  });

  const totalSelectedAmount = useMemo(
    () => getTotalInvoiceAmount(selectedInvoicesForPayment),
    [selectedInvoicesForPayment]
  );

  const openPaymentDialog = () => {
    if (selectedInvoicesForPayment.length === 0) {
      alert("Please select invoices!");
      return;
    }
    setIsPaymentDialogOpen(true);
  };

  const closePaymentDialog = () => {
    setIsPaymentDialogOpen(false);
    setIsPaymentSuccessful(false);
    resetForm();
  };

  const processPayment = async () => {
    const errorMessage = validateForm();

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    const paymentRequest = {
      ...formData,
      invoices: selectedInvoicesForPayment.map((item) => ({ id: item.id })),
      amount: totalSelectedAmount,
    };

    // Process payment
    setIsPaymentProcessing(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/payment`,
        paymentRequest
      );
      setPaymentResult(response.data);
      setIsPaymentSuccessful(true);
    } catch (error) {
      console.error(error);
      alert("Payment processing failed. Please try again.");
    } finally {
      setIsPaymentProcessing(false);
    }
  };

  return (
    <AppLayout>
      <h4 className="font-bold text-[15px]">INVOICES TO PAY</h4>

      <hr className="border-dividerColor mb-[17px] mt-[10px]" />

      <div className="flex justify-end mb-[28px]">
        <div className="bg-[#F5F5F5] flex items-center w-full sm:w-[400px] justify-between py-2 px-4 rounded-md">
          <div className="mr-20">
            <p className="text-gray-500 text-xs">Total amount to pay</p>
            <p className="text-gray-500 text-[13px]">
              {formatDisplayDate(new Date())}
            </p>
          </div>
          <span className="text-2xl text-gray-600 font-medium">
            {priceFormat(getTotalInvoiceAmount(availableInvoices))}
          </span>
        </div>
      </div>

      <InvoiceTable
        invoices={availableInvoices}
        setSelectedInvoices={setSelectedInvoicesForPayment}
      />

      <PaymentSummary selectedInvoices={selectedInvoicesForPayment} />

      <div className="flex justify-end">
        <button
          className="bg-primaryColor w-full sm:w-[400px] h-[58px] flex justify-center items-center rounded-md text-white text-[20px]"
          onClick={openPaymentDialog}
          disabled={selectedInvoicesForPayment.length === 0}
        >
          Pay {priceFormat(totalSelectedAmount)}
        </button>
      </div>

      <Dialog
        visible={isPaymentDialogOpen}
        onClose={closePaymentDialog}
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
        {!isPaymentSuccessful ? (
          <PaymentForm
            payForm={formData}
            setPayForm={setFormData}
            handleSubmit={processPayment}
            isLoading={isPaymentProcessing}
          />
        ) : (
          <PaymentSuccess paymentResponse={paymentResult} />
        )}
      </Dialog>
    </AppLayout>
  );
};

export default Dashboard;
