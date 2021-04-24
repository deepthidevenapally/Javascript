
let rectangles = [];
let maxArray = [];
let duplicateCount;

function findMax(rect){
    for (let i = 0 ; i < rect.length; i++){
        i.sort((a,b) => a,b );
        for(let j = 0 ;j < i.length; j++){
            maxArray.push(j[0]); 
        }
    }
    maxArray.sort((a,b) => b,a);
    for (let i = 0 ; i < maxArray.length-1; i++){
        if (maxArray[i] === maxArray[i+1]){
            duplicateCount = maxArray[i];
        }
    }
    console.log(duplicateCount);
}

findMax([[5,8],[3,9],[5,12],[16,5]]);