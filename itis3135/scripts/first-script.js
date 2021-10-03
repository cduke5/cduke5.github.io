var user = prompt("What is your name?", "User");
var mood = prompt("How are you feeling today?", "Well");
const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var intro = document.getElementById('intro');
var showNum1 = document.getElementById('number1');
var num1 = 0;

if (user != null && mood != null) 
{
    intro.innerHTML = "Today is " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + 
    ", and the time is: " + d.getHours() + ":" + d.getMinutes() + ".\nThe Cozy Jubilant Deer Enterprises, Ltd welcomes you, " + user.charAt(0).toUpperCase() + user.slice(1).toLowerCase() +
    "!\nWe're glad you are doing " + mood.toLowerCase() + "!";
}

function increment() 
{
    num1++;
    showNum1.innerHTML = num1;
}

function decrement() 
{
    num1--;
    showNum1.innerHTML = num1;
}

function multiply() 
{
    num1 *= 5;
    showNum1.innerHTML = num1;
}

function divide() {
    num1 /= 5;
    showNum1.innerHTML = num1;
}

function reset() {
    num1 = 0;
    showNum1.innerHTML = num1;
}