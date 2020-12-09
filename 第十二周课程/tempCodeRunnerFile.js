for(var i =0;i<10;i++){
    (function(i){
    setTimeout(function(){
        console.log("this is " + i)
    },2000)
})(i)
}