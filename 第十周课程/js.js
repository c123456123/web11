// var watermelon = function(){ 
    // console.log("this is watermelon-1") 
// return function pear(){ 
    // console.log("this is pear-1") 
// } 
// }



let grape = function redGrape(){ 
    return { 
        name:"my name is red grape", 
        printMyName:()=>{ 
            return ()=>{ 
                return Object.create({ 
                    name:"my name is grape nut",
                     printMyGrapeNut:function(){ 
                         console.log("this is MyGrapNut") 
                        } 
                    }) 
                } } } }
    grape().printMyName()().printMyGrapeNut()