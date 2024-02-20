class Student{
    constructor(name){
        this.name = name;
    }
    display(){
        console.log(`the name is ${this.name}`);
    }
}

class teacher extends Student{
    constructor(name, email){
        super(name);
        this.email = email;
    }
    result(){
        console.log(this.name);
        console.log(this.email);
    }

}
const test = new teacher('behroze','bk');
test.result();
