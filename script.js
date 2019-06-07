var userFirstName = prompt("What is your first name?");
var userLastName = prompt("What is your last name");
var age = prompt("What is your age?");
var fullName = userFirstName + " " + userLastName
var days = age * 365.25;
console.log("Your full name is " + fullName);
console.log("You are " + age + " years old!");
alert("You are roughly " + days + " days old!");
if(age < 18){
    console.log("Sorry you can't enter the venue.")
}
else if(age < 21){
    console.log("you can enter but no drinky drinky")
}
else {
    console.log("Come on in and drink your life away")
}
