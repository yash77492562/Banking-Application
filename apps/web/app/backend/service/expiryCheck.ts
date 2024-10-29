export function isCardExpired(expiry: string): boolean {
  const [monthStr, yearStr] = expiry.split('/'); // Split the expiry date

  // Check if monthStr or yearStr is undefined
  if (monthStr === undefined || yearStr === undefined) {
      throw new Error('Invalid expiry date format'); // Handle the error as needed
  }

  const month = parseInt(monthStr, 10); // Convert month from string to number
  const year = parseInt(yearStr, 10); // Convert year from string to number
  const currentDate = new Date();
  // Get the last day of the expiry month
  const expiryDate = new Date(2000 + year, month, 0); // Use 2000 + year to convert YY to YYYY
  return currentDate > expiryDate; // Returns true if current date is past expiry date
}
