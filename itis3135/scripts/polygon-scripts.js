var sides = prompt("The cozy deer would like a number of sides from 0 to 10", "0");
var shape;
var absRoundedSides;

function validateEntry()
{
    sides = parseFloat(sides);
    absRoundedSides = Math.round(Math.abs(sides));
    while (absRoundedSides > 10 || isNaN(sides) == true) //code validation if sides goes above 10 after making it absolute value and rounding or if the user enters a string
    {
        sides = prompt("Error, the cozy deer would like a number of sides from 0 to 10","0");
        absRoundedSides = Math.round(Math.abs(sides));
    }
    getShape(absRoundedSides);
}

function getShape(numSides) 
{
    if (numSides == 0) 
    {
        shape = "Polygon does not exist";
    }
    else if (numSides == 1)
    {
        shape = "Henagon";
    }
    else if (numSides == 2) 
    {
        shape = "Digon";
    }
    else if (numSides == 3)
    {
        shape = "Trigon";
    }
    else if (numSides == 4)
    {
        shape = "Tetragon";
    }
    else if (numSides == 5)
    {
        shape = "Pentagon";
    }
    else if (numSides == 6)
    {
        shape = "Hexagon";
    }
    else if (numSides == 7)
    {
        shape = "Heptagon";
    }
    else if (numSides == 8)
    {
        shape = "Octagon";
    }
    else if (numSides == 9)
    {
        shape = "Enneagon";
    }
    else 
    {
        shape = "Decagon";
    }
    document.getElementById("cssPolygonPara").innerHTML = shape;
}