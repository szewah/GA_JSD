function compareObjects(object1, object2) {
	var objA = Object.getOwnPropertyNames(object1)
	var objB = Object.getOwnPropertyNames(object2)
	if (objA.length !== objB.length) {
		return false
	} 
	var objectEquality = true
	objA.forEach(function(key) {
		if (object1[key] !== object2[key]) {
			objectEquality = false
		}
	})
		return objectEquality
}

console.log(compareObjects({}, {}))
console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }))
console.log(compareObjects({ name: 'nick' }, { name: 'nick' }))
