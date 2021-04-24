// get total number of even digits in an array

var findNumbers = function(nums){
    let  countArr = 0 ; 
    for (let i = 0; i < nums.length; i++){
        let count = 0;
        while ( nums[i] > 0){
             nums[i] = parseInt(nums[i] / 10);
             count ++;
        } if(count % 2 == 0){
            countArr++;
        }
    }
    return countArr;
}

console.log(findNumbers([555,901,482,1771]));