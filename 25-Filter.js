// const test = [1 ,2,3,4,5,6]
// const result = test.forEach(res => {
//     console.log(res + 1);
    
// });
//console.log(result);


const Obj = [{name : 'Behroze', age : 21},
{name : 'sami', age : 33},
{name : 'ALi', age : 55},
{name : 'kashif', age : 1}]

//Map

// const ObjR = Obj.filter((e)=>{
//    return e.age >= 21
// })
// console.log(ObjR);

//  const fire = [ 1,2,3,4,5,6]
// const test = fire.map((e)=>{
//   return e+5

// })
// console.log(test);
const fire = [ 1,2,3,4,5,6]
const test = fire.map((e)=>{
  return e*5

}).map((e)=>{
    return e-1;
})
console.log(test);