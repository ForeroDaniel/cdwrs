function liftoff(instructions){
	return instructions.sort(function(a, b) {return b - a;}).join(' ') + ' liftoff!'
}
