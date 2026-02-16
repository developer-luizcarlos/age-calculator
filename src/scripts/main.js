import { calculateAge } from "./calculateAge.js";
import { checkNumericInputValueIsValid } from "./checkNumericInputValueIsValid.js";
import { highlightFormFieldBasedOnCondition } from "./highlightFormFieldBasedOnCondition.js";
import { isValidDate } from "./isValidDate.js";

// Dom Elements
const form = document.querySelector(".form");
const submitButton = document.querySelector(".submit-btn");
const dayInput = document.querySelector("#input-day");
const monthInput = document.querySelector("#input-month");
const yearInput = document.querySelector("#input-year");
const daysOutputEl = document.querySelector(".definition--days");
const yearsOutputEl = document.querySelector(".definition--years");
const monthsOutputEl = document.querySelector(".definition--months");

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

  const inputs = [...document.querySelectorAll(".input")];
  const inputsValues = inputs.map((input) => input.value.trim());

  const checkInputsAreFilled = inputsValues.every((value) => {
    return value !== "";
  });

  if (!checkInputsAreFilled) {
    const notFilledInputs = inputs.filter((el) => {
      return el.value.trim() === "";
    });

    // highlight with error not filled inputs
    notFilledInputs.forEach((input) => {
      highlightFormFieldBasedOnCondition(
        false,
        input.parentElement,
        "This field is required",
      );
    });

    // Focus on the first not filled input
    notFilledInputs[0].focus();

    return;
  }

  const day = parseInt(dayInput.value.trim());
  const month = parseInt(monthInput.value.trim());
  const year = parseInt(yearInput.value.trim());

  if (!isValidDate(day, month, year)) {
    inputs.forEach((el, index) => {
      let errorMsg = index === 0 ? "Must be a valid date" : "";

      highlightFormFieldBasedOnCondition(false, el.parentElement, errorMsg);
    });

    inputs[0].focus();

    return;
  }

  inputs.forEach((el, index) => {
    highlightFormFieldBasedOnCondition(true, el.parentElement, "");
  });

  try {
    const { passedDays, passedMonths, passedYears } = calculateAge(
      day,
      month,
      year,
    );

    daysOutputEl.textContent = passedDays < 10 ? `0${passedDays}` : passedDays;

    monthsOutputEl.textContent =
      passedMonths < 10 ? `0${passedMonths}` : passedMonths;

    yearsOutputEl.textContent =
      passedYears < 10 ? `0${passedYears}` : passedYears;
  } catch (error) {
    alert(error.message);
  }
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
    from: 1900,
    to: currentYear,
  });

  highlightFormFieldBasedOnCondition(
    isInputValueValid,
    input.parentElement,
    "Must be a valid year",
  );
}
