const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");

/*
============================================
; Title:  Saeou-assignment-7.2.js
; Author: Professor Krasso - referenced starter code and examples
; Date:   25 January 2020
; Modified By: Joann Saeou
; Description: constructor functions
;===========================================
*/



function employee(id, first, last, title) {
  this.id = id;
  this.firstName = first;
  this.lastName = last;
  this.title = title;
  
}

var employees = [
 new employee(1, "Thomas", "Edison", "Software Engineer"),
 new employee(2, "Benjamin", "Franklin", "programmer"),
 new employee(3, "Nikola", "Tesla", "Project Manager"),
 new employee(4, "Charles", "Babbage", "Product Manager"),
 new employee(5, "Alexander", "Bell", "Business Analyst")
]

for(i = 0; i < employees.length; i++  ){
  console.log(employees[i].id + " " + employees[i].firstName + " "
  + employees[i].lastName + " " + employees[i].title )
}

/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/
