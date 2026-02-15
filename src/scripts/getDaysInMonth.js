export function getDaysInMonth(month) {
  if (typeof month !== "string") {
    throw new TypeError("Expect a string as the only argument");
  }

  const months = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 30,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
  };

  if (!(month.toLowerCase() in months)) {
    throw new Error("Given month does not exist");
  } else {
    return months[month.toLowerCase()];
  }
}
