export function getFormattedDate(date) {
  //   console.log(
  //     "1-",
  //     `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  //   );
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  //   console.log(
  //     "2",
  //     new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
  //   );
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
