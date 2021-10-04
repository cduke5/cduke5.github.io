var number;
var secNumber;
var count = 0;
var numAdd = false;
var numSubtract = false;
var numDivide = false;
var numMultiply = false;

function addition() 
{
    document.getElementById("calcDisplay").innerHTML = "+";
    numAdd = true;
}

function subtraction()
{
    document.getElementById("calcDisplay").innerHTML = "-";
    numSubtract = true;
}

function multiply()
{
    document.getElementById("calcDisplay").innerHTML = "x"
    numMultiply = true;
}

function division()
{
    document.getElementById("calcDisplay").innerHTML = "&divide"
    numDivide = true;
}

function numKeys(num)
{
    if (numAdd == true || numSubtract == true || numMultiply == true || numDivide == true)
    {
            if (document.getElementById("calcDisplay").innerHTML == '+' || document.getElementById("calcDisplay").innerHTML == '-' || document.getElementById("calcDisplay").innerHTML == "÷" || document.getElementById("calcDisplay").innerHTML == "x")
        {
            count = 0;
            document.getElementById("calcDisplay").innerHTML = num;
            secNumber = num;
            count++;
        }
            else if (count < 10)
        {
            document.getElementById("calcDisplay").innerHTML += num;
            secNumber += num;
            count++;
        }
    }
    else if (document.getElementById("calcDisplay").innerHTML == 0)
    {
        document.getElementById("calcDisplay").innerHTML = num;
        number = num;
        count++;
    }
    else if (count < 10)
    {
        document.getElementById("calcDisplay").innerHTML += num;
        number += num;
        count++;
    }
}

function allClear()
{
    number = 0;
    secNumber = 0;
    count = 0;
    document.getElementById("calcDisplay").innerHTML = number;
    numAdd = false;
    numSubtract = false;
    numMultiply = false;
    numDivide = false;
}

function calculate()
{
    number = parseFloat(number);
    secNumber = parseFloat(secNumber);
    if (numAdd == true)
    {
        number += secNumber;
    }
    else if (numSubtract == true)
    {
        number -= secNumber;
    }
    else if (numMultiply == true)
    {
        number *= secNumber;
    }
    else if (numDivide == true)
    {
        number /= secNumber;
    }
    else
    {
        number = 0;
    }
    document.getElementById("calcDisplay").innerHTML = number;
    numAdd = false;
    numSubtract = false;
    numMultiply = false;
    numDivide = false;
    count = 0;
    number = 0;
    secNumber = 0;
}