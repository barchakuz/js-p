const name = 'behroze';
const age = 15;

String.prototype.myName = function (){
    console.log('Hellp there', this.name);
}
