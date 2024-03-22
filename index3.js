// KRA Tax Bands and Rates effective from July 2023
const taxBands = [
    { upperBound: 24000, rate: 0.10 },
    { upperBound: 32333, rate: 0.25 },
    { upperBound: 800000, rate: 0.30 },
    { upperBound: Infinity, rate: 0.35 }
  ];
  const personalRelief = 2400;
  
  // Function to calculate PAYE
  function calculatePAYE(grossIncome) {
    let tax = 0;
    let cumulativeIncome = 0;
  
    for (const band of taxBands) {
      if (grossIncome > cumulativeIncome) {
        const taxableIncome = Math.min(grossIncome - cumulativeIncome, band.upperBound - cumulativeIncome);
        tax += taxableIncome * band.rate;
        cumulativeIncome = band.upperBound;
      } else {
        break;
      }
    }
  
    return tax - personalRelief;
  }
  
  // NHIF Deductions based on gross salary
  function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary >= 100000) return 1700;
    // Default deduction for salaries not covered by the brackets
    return 500;
  }
  
  // NSSF Deductions based on new rates effective February 2024
  function calculateNSSF(grossSalary) {
    const lowerEarningLimit = 6000;
    const upperEarningLimit = 18000;
    const contributionRate = 0.06; // 6%
    
    if (grossSalary <= lowerEarningLimit) {
      return grossSalary * contributionRate;
    } else if (grossSalary <= upperEarningLimit) {
      return (lowerEarningLimit * contributionRate) + ((grossSalary - lowerEarningLimit) * contributionRate);
    } else {
      return (upperEarningLimit * contributionRate);
    }
  }
  
  // Main function to calculate net salary
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Salary: ${netSalary}`);
  }
  
  const basicSalary = parseFloat(prompt("Enter your basic salary:"));
  const benefits = parseFloat(prompt("Enter your benefits:"));
  calculateNetSalary(basicSalary, benefits);
  