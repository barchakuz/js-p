// Constructor obj = singleton rest is non

const test = {
    name : 'Behroze',
    email : "behroze@github.com",
    age : 69
}
console.log(test.name);
console.log(test['name']); // this is because all key saved as strings.

test["My name"] = "Papa";
//console.log(test['My name']);
//console.log(test);
const xy = Symbol("D(");
test[xy] = Symbol("D(");
console.log( typeof test[xy]);
console.log(test);
            // Freezing object Value
// Object.freeze(test); 
// test['Address'] = "Islamabad";
// console.log(test);   
test.cal = function(){
    console.log("My Name is Behroze");
}   
console.log(test);
// Function Execute
console.log(test.cal());
// Function Info
console.log(test.cal);
