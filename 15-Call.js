function test (name){
    this.name = name;
    console.log(name);
}
function train(name, email){
    test.call(this, name);
    this.email = email;
    console.log(email);

}
console.log(train('behroze','bk@gmail.com'));