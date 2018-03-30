/*Compare Objects

Write a function that returns `true` if two objects 
contain the same data, or are equivalent, and `false` 
if not.

In order for the function to return true, ALL the 
properties that exist in object 1 must exist and 
be equal to those in object 2. Similarly, ALL the 
properties in object 2 must exist and be equal to 
those in object 1.

Note: You can assume that each object will only 
have one level, meaning there will be no nested objects.*/

function compareObjects (object1, object2) {
	var obj1Key = Object.keys(object1)
	var obj2Key = Object.keys(object2)
	if (obj1Key.length !== obj2Key.length) {
		return false
	}
	var objequal = true
	obj1Key.forEach(function(key) {
		if (object1[key] !== object2[key]) {
			objequal = false
		}
	})
	return objequal
}

console.log(compareObjects({},{}));

console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }));
// OUTPUT: false
console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));
// OUTPUT: true


