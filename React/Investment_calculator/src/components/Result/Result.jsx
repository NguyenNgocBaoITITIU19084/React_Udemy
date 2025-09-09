import { calculateInvestmentResults, formatter } from "../../util/investment";

export function Result({ userInput }) {
  const result = calculateInvestmentResults(userInput);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(yearData.annualInvestment)}</td>
            <td>{formatter.format(yearData.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
