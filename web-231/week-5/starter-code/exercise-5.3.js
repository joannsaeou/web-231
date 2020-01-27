
const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");



/*
============================================
; Title: Saeou-discussion-arrays-5.3.js
; Author: Krasso  
; Date: 17 December 2019
; Modified By: Joann Saeou
; Description: week 5 exercise 5.3 practice using object collection
;===========================================
*/



//start program

// collection of objects


// created an array of poets to firstname, lastname, genre, and rating
var poets = [
  {
    firstName: 'Ludwig Van',
    lastName: 'Beethoven',
    genre: 'classical', 
    rating: '10'
  },
  {
    firstName: 'William',
    lastName: 'Shakespeare',
    genre: 'classical/history',
    rating: '10'
  },
  {
    firstName: 'Johannes',
    lastName: 'Brahms',
    genre: 'classical',
    rating: '8.9',
  },
  {
    firstName: 'Frank',
    lastName: 'Shubert',
    genre: 'classical',
    rating: '7.5'
  },
  {
    firstName: 'Debbie',
    lastName: 'Wiseman',
    genre: 'modern',
    rating: '8'
  }
];



//using the original console log into console to execute the expected outcome
// output
console.log('\n-- POETS --')
let index = 1
poets.forEach( (poet) => {
  console.log("Last Name:" + ' ' + poet.lastName + " Genre:" + ' ' +
   poet.genre + (" Rating:") + ' ' + poet.rating)
  index++
})









//end program




/*
  Expected output
  Joann Saeou
  Exercise 5.3
  12/24/2019

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 10
  Last Name: shakespeare, Genre: Classical, Rating: 10
  Last Name: Brahms, Genre: Classical, Rating: 8.9
  Last Name: Shubert, Genre: Classical, Rating: 7.5
  Last Name: Wiseman, Genre: modern, Rating: 8
*/
