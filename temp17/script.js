//async

function f1(){
    setTimeout(() => {
    return 5;
    //return "f1 function"
    //return Promise.resolve("f1 function");
    //return Promise.reject("error");
}, 1000);
}

function f2(v){
    console.log(v);
}

//f1().then((v) => f2(v)).catch((err)=>console.log(err));
const result1 = f1();
const result2 = f2(result1);
//console.log(result1)
//console.log(result2)