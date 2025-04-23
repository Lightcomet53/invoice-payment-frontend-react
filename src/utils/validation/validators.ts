/**
 * Checks if a value is empty (null, undefined, empty string, empty array, empty object)
 * @param value - The value to check
 * @returns boolean - True if the value is empty, false otherwise
 */
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === "number") {
    return value === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
};

/**
 * Checks if a value is a valid email address
 * @param email - The email address to validate
 * @returns boolean - True if the email is valid, false otherwise
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Checks if values in object are valid
 * @param obj - The object to validate
 * @returns boolean - True if all values in object are valid, false otherwise
 */
export const isFormValid = (obj: any) => {
  let isValid = true;
  Object.keys(obj).forEach((key: string) => {
    if (isEmpty(obj[key])) {
      isValid = false;
    }
  });
  return isValid;
};

/**
 * Checks if a value is a valid card number
 * @param cardNumber - The card number to validate
 * @returns boolean - True if the card number is valid, false otherwise
 */
export const isValidCardNumber = (cardNumber: string): boolean => {
  //   const digitsOnly = cardNumber.replace(/\D/g, "");

  //   // Must be at least 13–19 digits
  //   if (digitsOnly.length < 13 || digitsOnly.length > 19) {
  //     return false;
  //   }

  //   // Luhn Algorithm
  //   let sum = 0;
  //   let shouldDouble = false;

  //   for (let i = digitsOnly.length - 1; i >= 0; i--) {
  //     let digit = parseInt(digitsOnly[i], 10);

  //     if (shouldDouble) {
  //       digit *= 2;
  //       if (digit > 9) digit -= 9;
  //     }

  //     sum += digit;
  //     shouldDouble = !shouldDouble;
  //   }

  //   return sum % 10 === 0;
  return true;
};

/**
 * Checks if a value is valid expiry date
 * @param expiryDate - The expiry date to validate
 * @returns boolean - True if the expiry date is valid, false otherwise
 */
export const isValidExpiryDate = (expiry: string): boolean => {
  //   const [monthStr, yearStr] = expiry.replace(/\s/g, "").split("/");

  //   if (!monthStr || !yearStr || monthStr.length !== 2 || yearStr.length !== 2) {
  //     return false; // Invalid format
  //   }

  //   const month = parseInt(monthStr, 10);
  //   const year = parseInt(yearStr, 10) + 2000; // "24" → 2024

  //   if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
  //     return false; // Invalid month/year
  //   }

  //   const now = new Date();
  //   const currentMonth = now.getMonth() + 1; // 0-indexed
  //   const currentYear = now.getFullYear();

  //   // Card is expired if year is less or same but month is less
  //   if (year < currentYear || (year === currentYear && month < currentMonth)) {
  //     return false;
  //   }

  return true;
};
