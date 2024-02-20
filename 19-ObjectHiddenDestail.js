const test = {
    name : "behroze",
    email : "bk@gmail.com",
    modiChai : function(){
        console.log(this.name);
    }
}
console.log(Object.getOwnPropertyDescriptor(test, 'name'));
Object.defineProperty(test, 'name',{
    writable : false
})
for (let [key, value] of Object.entries(test)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
}