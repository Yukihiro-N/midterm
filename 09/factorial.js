var factorial = function(a){
	var k = 1;
	var floor = Math.floor(a);
	var score = 1;
	if(a > 0){
		while(k <= floor){
			score = score *k;
			k = k + 1;
		}
	}else{
		score = null;
	}
	return score;
};