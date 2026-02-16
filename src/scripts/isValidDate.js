import { convertMonthNumberToName } from "./convertMonthNumberToName.js";
import { getDaysInMonth } from "./getDaysInMonth.js";

/**
 *
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @returns {boolean}
 */
export function isValidDate(day, month, year) {
  if (
    typeof day !== "number" ||
    typeof month !== "number" ||
    typeof year !== "number"
  ) {
    throw new TypeError("Expect numeric values as arguments");
  }

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;

  const isSomeDateElementOutOfRange =
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > currentYear;

  if (isSomeDateElementOutOfRange) {
    return false;
  }

  const monthName = convertMonthNumberToName(month);
  const daysInGivenMonth = getDaysInMonth(monthName);

  if (year > currentYear) {
    return false;
  }

  if (month > currentMonth && year === currentYear) {
    return false;
  }

  if (day > daysInGivenMonth) {
    return false;
  }

  return true;
}
