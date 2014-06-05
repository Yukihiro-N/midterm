var findFirstEvenNumber = function(a){
	var k = 0;
	while(k < a.length){
		if(a[k] % 2 == 0){
			return a[k];
			break;
		}else{
			k = k+1;
		}
	}
};