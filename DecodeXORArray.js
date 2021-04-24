const decode=(encoded, first)=>{
    let firstArr = [first];
    for (let i =0;i<encoded.length;i++){
        first= first ^ encoded[i]
        firstArr.push(first);
    }
    return firstArr;

};

console.log(decode([1,2,3],1));