
const rectangles = [];
const maxArray = [];
var duplicate = 1;

function findMax(rect){
    for (let i = 0 ; i < rect.length; i++){
        // for(let j = 0 ;j < rect[i].length; j++){
            rect[i].sort(function(a,b) {return a-b });
            maxArray.push(rect[i][0]); 
        // }
    }
    maxArray.sort(function(a,b) {return b-a});
    for (let i = 0 ; i < maxArray.length-1; i++){
        if (maxArray[i] == maxArray[i+1]){
            duplicate++;
        }
        else if (maxArray[i] != maxArray[i+1] && duplicate.length > 0){
            break;
        }
    
    }
    console.log(duplicate);
}

findMax([[5,8],[3,9],[5,12],[16,5]]);