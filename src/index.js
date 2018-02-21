
module.exports = function getLoveTrianglesCount(arr) {


	let count = 0;
	let i;
	let arr_length = arr.length;	
	for (i=0; i<arr_length; i+=1){
		if(i === arr[arr[arr[i]-1]-1]-1){
			count+=1;
		}	
	}
	return count/3;
};
