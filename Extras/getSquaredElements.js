/*Write a function called "getSquaredElementsAtProperty".

Given an object and a key, "getSquaredElementsAtProperty" returns an 
array containing all the squared elements of the original array at the 
given key. 

Notes:
* If the array is empty, it should return an empty array.
* If the property at the given key is not an array, it should return an 
empty array.
* If there is no property at the key, it should return an empty array.*/


function getSquaredElementsAtProperty(object, key) {
	var newArray = []
	if (Array.isArray(object[key]) === false) {
		return []
	}
	for (var prop in object[key]) {
		// newArray.push(Math.pow(object[key][prop], 2))
		newArray.push(object[key][prop] * object[key][prop])
	}
	return newArray
}


var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]