export function calculateYearsAndMonthsSinceStartJob() {
  // Start date
  const startDate = new Date("2022-03-01");

  // Current date
  const currentDate = new Date();

  // Calculate the difference in years and months
  const years = currentDate.getFullYear() - startDate.getFullYear();
  const months = currentDate.getMonth() - startDate.getMonth();
  const totalMonths = years * 12 + months;

  // Convert to decimal format
  const decimalYears = totalMonths / 12;

  return decimalYears.toFixed(1); // Return the result with one decimal place
}
