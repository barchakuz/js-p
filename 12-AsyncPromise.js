// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("One min Passed");
//         resolve();
//     }, 5000);
// })

// promiseOne.then(function(){
//     console.log('Promise Done');
// })

// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){let test = true;
//     if(test){
//         resolve({
//             userName : Behroze,
//             contact : Pk,
//             age : 16
//         })
//     }else{
//         reject( {
//             userName : Sami,
//             contact : Ind,
//             age : 19
//         })
    
//     }
// }, 1000)}.then((user)=>{console.log(user);


// }).catch(function (user){ console.log(user);
// })

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('Test phase One');
        let test = true;
        if(test){
            resolve({userName: 'Behroze', age: 15})
        }else{
            reject({userName: 'Aslam', age: 51})
        }

    }, 1000)
})
promiseThree.then(function(user){ 
    console.log(user);
    return user.age;
}).then(function(user){
    console.log(user);
}).catch(function(One){
    console.log(One);
})
console.log('test two');
async function final(promiseThree){
    try {
        const response = await promiseThree;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}