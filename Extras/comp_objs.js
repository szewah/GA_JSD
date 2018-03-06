function compareObjects(object1, object2) {
	var objA = Object.getOwnPropertyNames(object1)
	var objB = Object.getOwnPropertyNames(object2)
	if (objA.length !== objB.length) {
		return false
	} for (var i = 0; i<objA.length; i++) {
		var objName = objA[i] 
		if (object1[objName] !== object2[objName]) {
			return false
		}
		return true
	}
}


console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }))
console.log(compareObjects({ name: 'nick' }, { name: 'nick' }))
