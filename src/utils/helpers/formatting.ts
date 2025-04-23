import dayjs from "dayjs";

/**
 * Format a number as USD currency
 * @param price - The number to format
 * @returns Formatted currency string (e.g. "$1,234.56")
 */
export const priceFormat = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

/**
 * Format a card number with spaces between groups of 4 digits
 * @param value - The card number to format
 * @returns Formatted card number (e.g. "1234 5678 9012 3456")
 */
export const formatCardNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "").substring(0, 16);
  return digits.replace(/(\d{4})/g, "$1 ").trim();
};

/**
 * Format an expiry date with a slash between month and year
 * @param value - The expiry date to format
 * @returns Formatted expiry date (e.g. "12/24")
 */
export const formatExpiry = (value: string): string => {
  const digits = value.replace(/\D/g, "").substring(0, 4);
  if (digits.length < 3) return digits;
  return `${digits.substring(0, 2)}/${digits.substring(2)}`;
};

/**
 * Format a CVC code (3-4 digits)
 * @param value - The CVC to format
 * @returns Formatted CVC (e.g. "123")
 */
export const formatCvc = (value: string): string => {
  return value.replace(/\D/g, "").substring(0, 4);
};

/**
 * Format a ZIP code (5 digits)
 * @param value - The ZIP code to format
 * @returns Formatted ZIP code (e.g. "12345")
 */
export const formatZip = (value: string): string => {
  return value.replace(/\D/g, "").substring(0, 5);
};

/**
 * Format date as "YYYY-MM-DD"
 * @param date - Date to format (string, number, Date object)
 * @returns Formatted date string
 */
export const formatDate = (date: string | number | Date): string => {
  return dayjs(date).format("YYYY-MM-DD");
};

/**
 * Format date as "MMM D, YYYY" (e.g. "Jan 1, 2024")
 * @param date - Date to format (string, number, Date object)
 * @returns Formatted date string
 */
export const formatDisplayDate = (date: string | number | Date): string => {
  return dayjs(date).format("MMM D, YYYY");
};

/**
 * Format date and time as "DD-MMM-YYYY, HH:mm:ss"
 * @param date - Date to format (string, number, Date object)
 * @returns Formatted date and time string
 */
export const formatDateAndTime = (date: string | number | Date): string => {
  return dayjs(date).format("DD-MMM-YYYY, HH:mm:ss");
};

/**
 * Format date and time for display as "MMM D, YYYY h:mm A" (e.g. "Jan 1, 2024 2:30 PM")
 * @param date - Date to format (string, number, Date object)
 * @returns Formatted date and time string
 */
export const formatDisplayDateTime = (date: string | number | Date): string => {
  return dayjs(date).format("MMM D, YYYY h:mm A");
};
