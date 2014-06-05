var hinge = function(number){
	if (number <= 10){
		number = 0;
	}
	else if (number > 10){
		number = number - 10;
	}
	return number;
}