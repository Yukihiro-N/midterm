var fizzbuzz = function(value){
	if (value % 15 == 0){
		value = "fizzbuzz";
	} else if (value % 5 == 0){
		value = "buzz";
	} else if (value % 3 == 0 ){
		value = "fizz";
	} else {
		value = value;
	}
	return value;
}