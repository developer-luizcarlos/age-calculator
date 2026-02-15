import { convertMonthNumberToName } from "./convertMonthNumberToName.js";
import { getDaysInMonth } from "./getDaysInMonth.js";

export function calculateAge(day, month, year) {
  if (
    typeof day !== "number" ||
    typeof month !== "number" ||
    typeof year !== "number"
  ) {
    throw new TypeError("Given arguments must be numbers");
  }

  if (day < 1 || day > 31) {
    throw new Error("day argument must be a number between 1 and 31");
  }

  if (month < 1 || month > 12) {
    throw new Error("month argument must be a number between 1 and 12");
  }

  const date = new Date();

  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  let passedDays = currentDay - day;
  let passedMonths = currentMonth - month;
  let passedYears = currentYear - year;

  if (passedMonths < 0) {
    passedYears--;
    passedMonths += 12;
  }

  if (passedDays < 0) {
    passedMonths--;

    // counting past days from last month
    const lastMonthNumber = month === 1 ? 12 : month - 1;
    const monthName = convertMonthNumberToName(lastMonthNumber);
    const daysInMonth = getDaysInMonth(monthName);

    passedDays += daysInMonth;
  }

  return { passedDays, passedMonths, passedYears };
}
