export const isSameDate = (date1?: Date, date2?: Date) => {
  return date1?.toLocaleDateString() === date2?.toLocaleDateString();
}
  
export const localDateFromUTC = (utcDate: Date) => {
  return new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
}
