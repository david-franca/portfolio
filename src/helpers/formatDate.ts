/**
 * This function takes a string representing a date and returns a formatted
 * version of that date in the 'pt-BR' locale. The formatted date will only
 * include the year and the abbreviated name of the month.
 *
 * @param {string} date - The date to be formatted.
 * @return {string} The formatted date in the 'pt-BR' locale.
 */
export const formatDate = (date: string): string => {
  // Create a new Date object from the input string
  const dateObj = new Date(date);

  // Format the date object to a string in the 'pt-BR' locale,
  // but only including the year and the abbreviated name of the month
  const formattedDate = dateObj.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
  });

  // Capitalize the first letter of the month and return the formatted date
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
