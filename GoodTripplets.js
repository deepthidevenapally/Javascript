
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c

var countGoodtripplets = function(arr,a,b,c){
    let tripplets = 0;
    for (let i = 0; i < arr.length; i++){
        for(let j = i+1 ; j < arr.length; j++){
            for (let k = i+2; k < arr.length; k++){
                if (i<j && j<k &&
                    Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                )tripplets++;
            }
        }
    }
    return tripplets;
};

console.log(countGoodtripplets([3,0,1,1,9,7],7,2,3));