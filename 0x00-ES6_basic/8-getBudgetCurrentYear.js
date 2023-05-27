function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const year = getCurrentYear();
  const budget = {
    income: income[year],
    gdp: gdp[year],
    capita: capita[year],
  };

  return budget;
}
