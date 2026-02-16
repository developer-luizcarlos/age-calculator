import { highlightFormFieldBasedOnCondition } from "./highlightFormFieldBasedOnCondition.js";
import { checkNumericInputValueIsValid } from "./checkNumericInputValueIsValid.js";

// Dom Elements
const form = document.querySelector(".form");
const submitButton = document.querySelector(".submit-btn");
const dayInput = document.querySelector("#input-day");
const monthInput = document.querySelector("#input-month");
const yearInput = document.querySelector("#input-year");

// Listeners
if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

if (submitButton instanceof HTMLButtonElement) {
  submitButton.addEventListener("click", handleSubmitButtonClick);
}

if (dayInput instanceof HTMLInputElement) {
  dayInput.addEventListener("input", handleDayInputChange);
}

if (monthInput instanceof HTMLInputElement) {
  monthInput.addEventListener("input", handleMonthInputChange);
}

if (yearInput instanceof HTMLInputElement) {
  yearInput.addEventListener("input", handleYearInputChange);
}

// Handlers
function handleSubmitButtonClick(event) {
  // stop triggering required inputs alert message
  event.preventDefault();
}

function handleDayInputChange(event) {
  const input = event.target;

  const isInputValueValid = checkNumericInputValueIsValid(input, {
    from: 1,
    to: 31,
  });

  highlightFormFieldBasedOnCondition(
    isInputValueValid,
    input.parentElement,
    "Must be a valid day",
  );
}

function handleMonthInputChange(event) {
  const input = event.target;

  const isInputValueValid = checkNumericInputValueIsValid(input, {
    from: 1,
    to: 12,
  });

  highlightFormFieldBasedOnCondition(
    isInputValueValid,
    input.parentElement,
    "Must be a valid month",
  );
}

function handleYearInputChange(event) {
  const input = event.target;

  const currentYear = new Date().getFullYear();

  const isInputValueValid = checkNumericInputValueIsValid(input, {
    from: 1990,
    to: currentYear,
  });

  highlightFormFieldBasedOnCondition(
    isInputValueValid,
    input.parentElement,
    "Must be a valid year",
  );
}
