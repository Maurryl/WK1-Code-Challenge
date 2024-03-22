let marks = prompt("Please enter the student's marks (0-100): ");
// Ensure the input is a number and within the valid range
if (marks !== null && !isNaN(marks) && marks >= 0 && marks <= 100) {
  marks = Number(marks); //Convert string to number
  let grade;

  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 49) {
    grade = 'C';
  } else if (marks >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  alert(`The grade is: ${grade}`);
} else {
  alert("Invalid input. Please enter a number between 0 and 100.");
}
