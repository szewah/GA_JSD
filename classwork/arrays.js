/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

var imageArr = ["image1.png", "image2.png", "image3.png"]
console.log('Question 1 ' + imageArr)

// Your code here

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

var q2 = imageArr[0]
console.log('Question 2 ' + q2)

// Your code here

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

var q3 = imageArr.length
console.log('Question 3 ' + q3)
// Your code here

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */

var q4 = imageArr[imageArr.length -1]
console.log('Question 4 ' + q4)
// Your code here


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use the .forEach() or .map() array methods to increase each value by 1.
 * You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
var numbers = [1,2,3,4]
var q5 = numbers.map(function(num) {
	return num + 1
})

console.log('Question 5 ' + q5)

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

var q6 = 0
q5.forEach(function(num) {
	q6 += num 
})

console.log('Question 6 ' + q6)
// Your code here



//.filter() is to distill it into an another array
//filter and map require a return statement inside eah one. filter needs a boolean.