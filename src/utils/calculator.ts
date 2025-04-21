import { InvoiceType } from "../lib/interface";

export const getTotalInvoiceAmount = (invoices: InvoiceType[]) => {
    return invoices.reduce((total, item) => total + item.amount, 0);
}