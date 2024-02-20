const obj = {
    name : 'Behroze',
    age : 15,
    location : 'lahore'
}
function test(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

const new1 = test('behroze', 15, 'islamabad');
const new2 = test('kashif', 15, 'karachi');
console.log(new1);
console.log(new2);