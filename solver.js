function load() {
    let problem = document.getElementById("problems").value
    if (problem == "threeFive") {
        document.getElementById("solution").textContent = "Enter the two multiples you would like to use, and the maximum";
        document.getElementById("input1").style.display = "block";
        document.getElementById("input2").style.display = "block";
        document.getElementById("input3").style.display = "block";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "fibEven") {
        document.getElementById("solution").textContent = "Enter the maximum";
        document.getElementById("input1").style.display = "block";
        document.getElementById("input2").style.display = "none";
        document.getElementById("input3").style.display = "none";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "largePrime") {
        document.getElementById("solution").textContent = "Enter the value you would like to use";
        document.getElementById("input1").style.display = "block";
        document.getElementById("input2").style.display = "none";
        document.getElementById("input3").style.display = "none";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "palindrome") {
        document.getElementById("solution").textContent = "Enter number of digits for multipliers";
        document.getElementById("input1").style.display = "block";
        document.getElementById("input2").style.display = "none";
        document.getElementById("input3").style.display = "none";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "smallMult") {
        document.getElementById("solution").textContent = "Enter maximum multiplier";
        document.getElementById("input1").style.display = "block";
        document.getElementById("input2").style.display = "none";
        document.getElementById("input3").style.display = "none";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "sumSquare") {
        document.getElementById("solution").textContent = "Enter maximum value";
        document.getElementById("input1").style.display = "block";
        document.getElementById("input2").style.display = "none";
        document.getElementById("input3").style.display = "none";
        document.getElementById("solve").style.display = "block";
    }
}
function solve() {
    let problem = document.getElementById("problems").value
    if (problem == "threeFive") {
        let x = Number(document.getElementById("input1").value);
        let y = Number(document.getElementById("input2").value);
        let z = Number(document.getElementById("input3").value);
        threeFive(x, y, z);
    } else if (problem == "fibEven") {
        fibEven(document.getElementById("input1").value);
    } else if (problem == "largePrime") {
        largePrime(document.getElementById("input1").value);
    } else if (problem == "palindrome") {
        palindrome(document.getElementById("input1").value);
    } else if (problem == "smallMult") {
        smallMult(Number(document.getElementById("input1").value));
    } else if (problem == "sumSquare") {
        sumSquare(Number(document.getElementById("input1").value));
    }
}