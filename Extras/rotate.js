/*Write a function that will rotate an array to the right by a 
certain number of "steps".  
For example, the array to rotate is: [1,2,3,4,5,6,7] and 
will be rotated 3 "steps". The final array will look 
like: [5,6,7,1,2,3,4].  Notice the position of each index 
is shifted to the right by three places. The first argument 
to the rotate function is the array to rotate; the second argument 
is a number of​ steps.*/

// function rotate(array, steps) {
// 	for (var i = 0; i < steps; i++) {
// 		var removed = array.pop()
// 		array.unshift(removed)
// 	}
// 	return array
// }

rotate([1,2,3,4,5],2)

function rotate(array, steps) {
	var rotations = steps
	var index
	while (rotates > 0) {
		index = array.pop()
		array.unshift(index)
	// rotations--
	}
	return array
}

rotate([1,2,3,4,5],2)