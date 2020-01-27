

/*
============================================
; Title: Saeou-discussion-arrays-5.4.js
; Author: Krasso  
; Date: 06 January 2019
; Modified By: Joann Saeou
; Description: exercise 5.4 week 5 Javascript arrays filtering-reducing complex data
;===========================================
*/


//displaying header from week 2 with my first and last name and assignment name
const header = require('../../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");






// re-added the array created for  famous composers from assignment 5.3  
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




let lastNames = poets.map((poet) => {
  return poet.lastName
})



//displaying famous composers by rating to last name
const ratings = poets.map(({rating, lastName}) => ({rating, lastName}));

//displaying famous composers by genre to last name
const genre = poets.map(({genre, lastName}) => ({genre, lastName}));

// output
console.log('--Composers by ratings--')
index = 1
ratings.forEach((poet) => {    //displaying famous composer's last names
  console.log( "ratings " + poet.rating )
  console.log( "composers  " + poet.lastName )
  console.log(" ")
})

// output
console.log('--Composers by genre--')
index = 1
genre.forEach((poet) => {    //displaying famous composer's last names
console.log( "genre " + poet.genre)
console.log( "composers  " + poet.lastName )
console.log(" ")
})








/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/
