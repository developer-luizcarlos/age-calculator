/**
 * Highlights the form field elements
 * based on a condition by applying
 * different styles to the elements
 * @param {boolean} condition
 * @param {HTMLElement} field
 * @param {string} errorMsg
 * @returns {void}
 */
export function highlightFormFieldBasedOnCondition(condition, field, errorMsg) {
  if (typeof condition !== "boolean") {
    throw new TypeError("Expect a boolean as condition argument");
  }

  if (!(field instanceof HTMLElement)) {
    throw new Error("Expect an HTML element as field argument");
  }

  if (typeof errorMsg !== "string") {
    throw new TypeError("Expect a string as errorMsg argument");
  }

  const label = field.querySelector("label");
  const input = field.querySelector("input");
  const errorMsgEl = field.querySelector(".error-msg");

  if (!label || !input || !errorMsgEl) {
    return;
  }

  input.style.borderColor = condition ? "hsl(0, 0%, 86%)" : "hsl(0, 100%, 67%)";

  input.style.outlineColor = condition
    ? "hsl(259, 100%, 65%)"
    : "hsl(0, 100%, 67%)";

  label.style.color = condition ? "hsl(0, 1%, 44%)" : "hsl(0, 100%, 67%)";

  errorMsgEl.ariaHidden = condition;
  errorMsgEl.style.visibility = condition ? "hidden" : "visible";
  errorMsgEl.textContent = errorMsg;
}
