import React from "react";
import { InvoiceType } from "../../types/interface";
import { priceFormat } from "../../utils/helpers/formatting";
import { getTotalInvoiceAmount } from "../../utils/helpers/invoiceCalculator";
import { paymentProcessingFee } from "../../utils/constants/constants";

interface PropsType {
  selectedInvoices: InvoiceType[];
}

const PaymentSummary: React.FC<PropsType> = ({ selectedInvoices }) => {
  return (
    <div className="flex justify-end mt-[41px] mb-[15px]">
      <div className="rounded-md border w-full sm:w-[400px] border-gray-200 px-4 py-[19px]">
        <div className="flex justify-end mb-[20px]">
          <span className="text-gray-500 font-medium text-xs">Payment summary</span>
        </div>

        <table className="w-full">
          <tbody>
            {selectedInvoices.map((item: InvoiceType) => (
              <tr key={item.id}>
                <td align="right" className="text-gray-600 text-xs py-1" width={100}>
                  {item.id}
                </td>
                <td align="right" className="text-gray-600 text-xs py-1" width={200}>
                  {priceFormat(item.amount)}
                </td>
              </tr>
            ))}
            <tr>
              <td align="right" className="text-gray-600 text-xs py-1" width={80}>
                Fee
              </td>
              <td align="right" className="text-gray-600 text-xs py-1" width={200}>
                {priceFormat(
                  getTotalInvoiceAmount(selectedInvoices) * paymentProcessingFee
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentSummary;
