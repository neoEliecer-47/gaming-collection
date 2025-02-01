export function buildDate(date: string) {
  const months = [
    { numMonth: "01", month: "JAN" },
    { numMonth: "02", month: "FEB" },
    { numMonth: "03", month: "MAR" },
    { numMonth: "04", month: "APR" },
    { numMonth: "05", month: "MAY" },
    { numMonth: "06", month: "JUN" },
    { numMonth: "07", month: "JUL" },
    { numMonth: "08", month: "AUG" },
    { numMonth: "09", month: "SEP" },
    { numMonth: "10", month: "OCT" },
    { numMonth: "11", month: "NOV" },
    { numMonth: "12", month: "DEC" },
  ];
  const arrDateStr = date.split("-");
  const monthStr = months.find((d) => d.numMonth === arrDateStr[1])?.month;
  const newStrDate = monthStr + " " + arrDateStr[2] + ", " + arrDateStr[0];
  return newStrDate;
}
