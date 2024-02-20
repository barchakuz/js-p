class Test {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;

    }

    case(){
        console.log(this.name);
        console.log(this.email);
        console.log(this.age);

    }
}

const result = new Test('behroze','islamabad', 15);
console.log(result.case());
// result.constructor('bk','isb',11);
// console.log(result.case());  Error