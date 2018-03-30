/*Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the 
length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.*/

function getLengthOfLongestElement(array) {
	if (array.length === 0) {
		return 0
	}
	var max = 0
	for (var i = 0; i < array.length; i++) {
		if (max < array[i].length) {
			max = array[i].length
		}
	}
	return max
}


var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output);
