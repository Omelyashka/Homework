function createNewUser(){
    this.newUser = function() {
        this.firstName = prompt("Enter the name of user")
        this.lastName = prompt("Enter the last name of user")
        this.day = prompt("Enter the day of your birth")
        this.month = prompt("Enter the month of your birth")
        this.year = prompt("Enter the year of your birth")
    };
           
    this.getLogin = function() {
            return this.firstName.substring(0,1).toLowerCase() + this.lastName.toLowerCase();
        };
 
    this.getDate = function () {
        if(this.day.length && this.month.length < 2){
            return `0${this.day}/0${this.month}/${this.year}`
        } else if(this.day.length < 2){
            return `0${this.day}/${this.month}/${this.year}`
        } else if(this.month.length < 2){
            return `${this.day}/0${this.month}/${this.year}`
        }
        else {
            return `${this.day}/${this.month}/${this.year}`
        }
        
    }
    this.getAge = function() {
        let birth = new Date(this.year, this.month - 1, this.day);
        let year = birth.getFullYear();
        let today = new Date();
        return( today.getFullYear() - year - (today.getTime() < birth.setFullYear(year)) + " years" )
    }
    this.getPassword = function() {
        return this.firstName.substring(0,1).toUpperCase() + this.lastName.toLowerCase() + this.getDate().substring(6,10)
    }
       
}
let user = new createNewUser();
user.newUser();
console.log(user.getLogin())
console.log(user.getAge())
console.log(user.getPassword())