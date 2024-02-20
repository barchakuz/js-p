const test ={
    name : "Behroze",
    fullName : {
        Fname : 'behroze',
        Mname : 'Aslam',
        Lname : "Khan"
    }
}

// console.log(test.fullName.Fname);
// Test to avoid failure
// console.log(test.fullName?.Car);
// Adding Tow Objects

const testTow = {
    age : 15
}

const ObjThree = Object.assign({},test, testTow);
console.log(ObjThree);
console.log(Object.keys(ObjThree));
console.log(Object.values(ObjThree));
console.log(Object.entries(ObjThree));