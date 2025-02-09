export const parseDate = (dateStr: string): Date => {
  const months: Record<string, number> = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const parts = dateStr.split(', ');
  if (parts.length === 2 && months.hasOwnProperty(parts[0])) {
    return new Date(Number(parts[1]), months[parts[0]]);
  }

  return new Date(NaN); // Return an invalid date to handle errors
};
