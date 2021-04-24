var call1 = function(){
    setTimeout(()=>console.log("win"),3000);
    call2();
}

var call2 = function(){
    setTimeout(()=>console.log("win more"));
}

var mymain = function(mycall){
    return mycall();
}

console.log(mymain(call1));
