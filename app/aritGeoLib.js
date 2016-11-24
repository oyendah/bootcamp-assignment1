var aritGeo = module.exports = function (myArray) {
	var diff = myArray[1] - myArray[0];
	var ratio = myArray[1] / myArray[0];

	var arith = true;
	var geo = true;

	for(var i = 0; i < myArray.length - 1; i++)
	{
    	if( myArray[i + 1] - myArray[i] !== diff )
      		arith = false;
    	if(myArray[i + 1] / ratio !== myArray[i])
      		geo = false;
	}

	if(myArray.length === 0 ){
		return 0;
	}		
	else if(arith === true){
		return "Arithmetic";
	}    	
	else if(geo === true){
		return "Geometric";
	}    	
	else{
		return -1;
	}
    	
}