// TODO: Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// id = add-employees-btn 

// TODO: Get user input to create and return an array of employee objects


// define collectEmployees and create new array to populate with data from the new arrays (based on user input) BUT stop when the array hits a length of 6 [0],[1],[2],[3],[4],[5])     !
const collectEmployees = function () {
const employeesArray = [];
let employeeInfo = '';

let keepGoing = true;

while (keepGoing) {
    let firstName = prompt ("Hi there, what is your first name?", "Please enter your first name");
    let lastName = prompt ("Hi again, what is your last name?", "Please enter your last name");
    let salary = prompt ("One more thing! $$$", "Please enter your target salary");

}}


const displayAverageSalary = function(employeesArray) {
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) { 
    sum += employeesArray[i].salary ;
  }
    return (sum / employeesArray.length);
  }


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);