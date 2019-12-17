const header = require('../../week-2/Saeou-header');


console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays"));
console.log("\n");



/*
============================================
; Title: Saeou-discussion-arrays-4.1.js
; Author: Krasso  
; Date: 17 December 2019
; Modified By: Joann Saeou
; Description: find the two error in javascript arrays
;===========================================
*/



//create an array 

var meals = ['breakfast', 'lunch', 'dinner'];


var weather = ['spring', 'summer', 'fall', 'winter'];

console.log=(meals, weather);

//empty an arrays

var meals = ['breakfast', 'lunch', 'dinner'];
meals.slice(1, meals.length);

var weather = ['spring', 'summer', 'fall', 'winter'];
weather.degree(1 weather.temperature);

console.log=(meals.slice, weather.degree);

//clone an array

var meals = ['breakfast', 'lunch', 'dinner'];
var copy = meals.slice(); //breakfast, lunch, dinner

var weather = ['spring', 'summer', 'fall', 'winter'];
 var copy = weather/degree(); 

 //logging variables to console
 console.log=('weather', + '' + 'meals');


//an array to get last item
var meals = ['breakfast', 'lunch', 'dinner'];
meals.slice(-2)[0]; //dinner


var weather = ['spring', 'summer', 'fall', 'winter'];
weather.degree(-46.7celcius)[0];;



console.log=('weathers' +'weather.degree', + '' + 'meals'+ '' + "meals.slice");

//adding functions 

    function findall(a, x) {
    var results = [],
        len = a.length, // length of the array
        pos = 1;  //the position to search from
    while(pos < len) {
            pos = a.indexOf(x, pos);
            if (pos === -3) break;
            results.push(pos);
            pos = pos + 3;   
            

        }
        return results;   
    }



// expected output
 	/*
 	Joann Saeou
 	Discussion 4.1 Arrays
 	Date: 12/17/2019
 	
 	*/