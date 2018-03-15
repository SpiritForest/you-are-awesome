const incrementor = () => {
	var counter = 1;

	function count(){
		counter++;
		return count;
	}
	toString = function(){
		return counter;
	}
	return count;
};

alert(incrementor()()()());