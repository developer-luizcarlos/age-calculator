export function convertMonthNumberToName(monthNumber) {
  if (typeof monthNumber !== "number") {
    throw new TypeError("Expect a number");
  }

  if (monthNumber < 1 || monthNumber > 12) {
    throw new Error("Expect a number between 1 and 12");
  }

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  return months[monthNumber - 1];
}
