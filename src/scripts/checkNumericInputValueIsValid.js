/**
 *
 * @param {HTMLInputElement} input
 * @param {{from: number, to: number}} range
 * @returns {boolean}
 */
export function checkNumericInputValueIsValid(input, range) {
  const inputValue = parseInt(input.value.trim());

  const { from, to } = range;

  const isInputValueBetweenRange = inputValue >= from && inputValue <= to;

  return input.checkValidity() && isInputValueBetweenRange;
}
