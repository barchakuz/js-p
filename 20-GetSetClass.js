class User {
    constructor(user, email){
        this.user = user;
        this.email = email;

    }
    get user(){
        return `${this._user}Test`.toUpperCase();
    }
    set user (value){
        this._user = value;
    }
    // get email (){
    //     return `${this._email}`.toLowerCase();
    // }
    get email (){   
        return 'Lun kha';
    }
    set email (value){
        this._email = value + `Daddy`;
    }

}

const data = new User('Behroze', 'b@gmai.com');
console.log(data.email)