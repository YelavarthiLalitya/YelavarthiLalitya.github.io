//async

function f1(){
    /*
    setTimeout(() => {
    return 5;
    }, 1000);
    */
    return Promise.resolve(5);
    //return Promise.reject("error");
}

function f2(a){
    console.log(a);
}

f1()
    .then((v) => f2(v))
    .catch((err)=>console.log(err));


const result1 = f1();
const result2 = f2(result1);

/*
f1.then(()=>f2()); 
*/

//console.log(result1)
//console.log(result2)