const User= {
    _name : 'Behroze',
    _email: 'b@gmail.com',


    get name(){
        return `Papa`;

    },
    set name(value){
        this._name = value;

    }

}

console.log(User.name)