const person = [];
const salaries = [];
var count = 0;
var addPerson;
var adSalary;
var avgSalary = 0;
var maxSal = 0;

window.onload = function()
{
    document.getElementById("employee").focus();
}

function addSalary() 
{
    addPerson = prompt("What is the employee's name?");
    
    while (addPerson === '' || addPerson == null)
    {
        addPerson = prompt("What is the employee's name?");
    }

    adSalary = prompt("What is the employee's salary?");

    adSalary = parseFloat(adSalary);

    while (isNaN(adSalary) || adSalary == null || adSalary < 0)
    {
        adSalary = prompt("What is the employee's salary?");
    }

    person[count] = addPerson;
    document.getElementById("employee").innerHTML += ("<option>"+ addPerson + "</option>");
    salaries[count] = adSalary;
    count++;
    addPerson = null;
    adSalary = null;
    document.getElementById("employee").focus();
}

function displayResults()
{
    for (var i = 0; i < salaries.length; i++)
    {
        avgSalary += salaries[i];
        if (salaries[i] > maxSal)
        {
            maxSal = salaries[i];
        }
    }
    parseFloat(avgSalary /= count).toFixed(2);
    document.getElementById("resultsAvg").innerHTML = "Average: " + avgSalary.toFixed(2);
    document.getElementById("resultsMax").innerHTML = "Highest: " + maxSal;
    avgSalary = 0;
    maxSal = 0;
}

function displaySalary()
{
    document.getElementById("results_table").innerHTML = ("<tr><th>Employee</th><th>Salary</th></tr>");
    for (i = 0; i < person.length; i++)
    {
        document.getElementById("results_table").innerHTML += ("<tr><td>" + person[i] + "</td><td>" + salaries[i] + "</td></tr>");
    }
}
