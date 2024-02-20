class User {
    constructor(name, email){
        this._name = name;
        this._email = email
    }


    Object.defineProperty(this, 'name', {
        get: function () {
            return 'PAPA'
        }
        set: function(value)
        {
            this._name = value;

        }    
    })
}