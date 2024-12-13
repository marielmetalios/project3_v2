// TODO: Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// id = add-employees-btn 

// TODO: Get user input to create and return an array of employee objects


// define collectEmployees and create new array to populate with data from the new arrays (based on user input) BUT stop when the array hits a length of 6 [0],[1],[2],[3],[4],[5])     !
const collectEmployees = function () {
const employeesArray = [];
let runAgain = true;

while (runAgain) {
    let firstName = prompt ("Hi there, what is your first name?", "Please enter your first name");
    let lastName = prompt ("Hi again, what is your last name?", "Please enter your last name");
    let salary = prompt ("One more thing! $$$", "Please enter your target salary");

    if (isNaN(salary)) {
        console.log('Not a Number');
        } else ;
        console.log(`Salary is a number! Can be used in the average calc`);

    salary = Number(salary);    

    employeesArray.push({
        firstName: firstName,
        lastName: lastName,
        salary: salary
    });
    
    runAgain = confirm("Add more Employees?");
     if (runAgain) {
    console.log ("Another employee added");
    } else {
    console.log ("No more employees to add");
    // check if salary input is a number 
    }

    return employeesArray;
};
}

// constant variable displayAverageSalary is defined with array function.
// total Salary is defined and calculated, and then average salary is defined and calced.
const displayAverageSalary = function (employeesArray) {
    const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
    const numberOfEmployees = employeesArray.length;
    const averageSalary = totalSalary / numberOfEmployees;
    const averageSalary2Decimals = averageSalary.toFixed(2);
    console.log (displayAverageSalary);
    console.log(`The average employee salary between our ${numberOfEmployees} employee(s) is $${averageSalary2Decimals} when given salaries with no decimals.`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
    const min = 0
    const max = employeesArray.length -1
    const i = Math.floor(Math.random() * (max - min + 1) ) + min;

    return employeesArray[i];
};



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