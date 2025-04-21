// Format number as "$ dd,ddd.dd"
export const priceFormat = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(number)
    .replace("$", "$ ");
};

// Format card number as "#### #### #### ####"
export const formatCardNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").substring(0, 16);
  const groups = digits.match(/.{1,4}/g);
  return groups ? groups.join(" ") : "";
};

// Format expiry as "MM / YY"
export const formatExpiry = (value: string) => {
  const digits = value.replace(/\D/g, "").substring(0, 4);
  if (digits.length < 3) return digits;
  return `${digits.substring(0, 2)} / ${digits.substring(2)}`;
};

// Format CVC as a max of 4 digits
export const formatCvc = (value: string) => {
  return value.replace(/\D/g, "").substring(0, 4);
};

// Format ZIP code with optional dash for 9-digit ZIP+4
export const formatZip = (value: string) => {
  const digits = value.replace(/\D/g, "").substring(0, 9);
  if (digits.length <= 5) return digits;
  return digits.substring(0, 5) + "-" + digits.substring(5);
};

// Format any date as "YYYY-MM-DD"
export const formatDate = (value: any) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Format any date and time as "YYYY-MM-DD, hh:mm:ss"
export const formatDateAndTime = (value: any) => {
  const trimmed = value.substring(0, 23);
  const date = new Date(trimmed);

  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  const time = date.toLocaleTimeString("en-GB"); // "HH:mm:ss" format

  return `${day}-${month}-${year}, ${time}`;
};
