const obj = {
    name: "Behroze",
    fatherName : "Aslam",
    age : 23,
    details : function (){
        console.log(`My name is , ${this.name}`);
    }
}
obj.this;

const arrow = () => {console.log(`My name is Papo`)}
arrow() ;