//asynchronous - concept of Promise.reject and Promise.resolve
// fetch returns a promise!-- here we used f1() in place of fetch(), look at temp10 and this code side by side
// most common/standard example of the promise thingy is online banking site.

function f1(x){
    if(x<0){
        return Promise.reject("something went wrong!");
    }
    else{
        return Promise.resolve(x);
    }
    /*
    setTimeout(() => {
    return 5;
    }, 1000);
    */
    //return Promise.resolve(5); // we return resolve on if everything went well. else, if somethign went wrong, we send the promise.reject . 
    //return Promise.reject("error");
}

function f2(a){
    console.log(a);
}

f1(-10)
    .then((v) => {f2(v)})
    .catch((err)=>console.log(err));


const result1 = f1();
const result2 = f2(result1);

/*
f1.then(()=>f2()); 
*/

//console.log(result1)
//console.log(result2)