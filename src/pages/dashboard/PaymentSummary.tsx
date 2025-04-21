import React from "react";
import { InvoiceType } from "../../lib/interface";
import { priceFormat } from "../../utils/format";
import { getTotalInvoiceAmount } from "../../utils/calculator";
import { fee } from "../../lib/constants";

interface PropsType {
  selectedInvoices: InvoiceType[];
}

const PaymentSummary: React.FC<PropsType> = ({ selectedInvoices }) => {
  return (
    <div className="flex justify-end">
      <div className="rounded-md border w-full sm:w-[400px] border-gray-200 p-6">
        <div className="flex justify-end mb-6">
          <span className="text-gray-600 font-medium">Payment summary</span>
        </div>

        <table className="w-full">
          <tbody>
            {selectedInvoices.map((item: InvoiceType) => (
              <tr key={item.id}>
                <td align="right" className="text-gray-600" width={100}>
                  {item.id}
                </td>
                <td align="right" className="text-gray-600" width={200}>
                  {priceFormat(item.amount)}
                </td>
              </tr>
            ))}
            <tr>
              <td align="right" className="text-gray-600" width={80}>
                Fee
              </td>
              <td align="right" className="text-gray-600" width={200}>
                {priceFormat(getTotalInvoiceAmount(selectedInvoices) * fee)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentSummary;
