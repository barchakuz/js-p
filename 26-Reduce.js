const test = [1,2,3,4,5,6,7,8,9,10]

const nextTest = test.reduce((acc,curVal)=>{
    return acc + curVal[3]
},6)
console.log(nextTest);