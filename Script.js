function Add(){
    var num1 = document.getElementById("NumOne").valueAsNumber;
    var num2 = document.getElementById("NumTwo").valueAsNumber;
    var sum = num1 + num2;
    document.getElementById("Result").innerHTML = "The sum of " +  num1 +  " and " +  num2 + " is " + sum;
}

function Minus(){
    var num1 = document.getElementById("NumOne").valueAsNumber;
    var num2 = document.getElementById("NumTwo").valueAsNumber;
    var diff = num1 - num2;
    document.getElementById("Result").innerHTML = "The difference of " +  num1 +  " and " +  num2 + " is " + diff;
}

function Multi(){
    var num1 = document.getElementById("NumOne").valueAsNumber;
    var num2 = document.getElementById("NumTwo").valueAsNumber;
    var prod = num1 * num2;
    document.getElementById("Result").innerHTML = "The product of " +  num1 +  " and " +  num2 + " is " + prod;
}

function Divi(){
    var num1 = document.getElementById("NumOne").valueAsNumber;
    var num2 = document.getElementById("NumTwo").valueAsNumber;
    var quot = num1 / num2;
    document.getElementById("Result").innerHTML = "The quotient of " +  num1 +  " and " +  num2 + " is " + quot;
}

function Mod(){
    var num1 = document.getElementById("NumOne").valueAsNumber;
    var num2 = document.getElementById("NumTwo").valueAsNumber;
    var rem = num1 % num2;
    document.getElementById("Result").innerHTML = "The remainder of " +  num1 +  " and " +  num2 + " is " + rem;
}