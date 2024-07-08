function load() {
    document.getElementById("input1").style.display = "none";
    document.getElementById("input2").style.display = "none";
    document.getElementById("input3").style.display = "none";
    document.getElementById("solve").style.display = "none";
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
        document.getElementById("solve").style.display = "block";
    } else if (problem == "largePrime") {
        document.getElementById("solution").textContent = "Enter the value you would like to use";
        document.getElementById("input1").style.display = "block";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "palindrome") {
        document.getElementById("solution").textContent = "Enter number of digits for multipliers";
        document.getElementById("input1").style.display = "block";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "smallMult") {
        document.getElementById("solution").textContent = "Enter maximum multiplier";
        document.getElementById("input1").style.display = "block";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "sumSquare") {
        document.getElementById("solution").textContent = "Enter maximum value";
        document.getElementById("input1").style.display = "block";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "nthPrime") {
        document.getElementById("solution").textContent = "Enter n value";
        document.getElementById("input1").style.display = "block";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "largestProduct") {
        document.getElementById("solution").textContent = "Enter max series size";
        document.getElementById("input1").style.display = "block";
        document.getElementById("solve").style.display = "block";
    } else if (problem == "specialTriplet") {
        document.getElementById("solution").textContent = specialTriplet();
    }
}
function solve() {
    let problem = document.getElementById("problems").value
    let x = Number(document.getElementById("input1").value);
    let y = Number(document.getElementById("input2").value);
    let z = Number(document.getElementById("input3").value);
    if (problem == "threeFive") {
        document.getElementById("solution").textContent = threeFive(x, y, z);
    } else if (problem == "fibEven") {
        document.getElementById("solution").textContent = fibEven(x);
    } else if (problem == "largePrime") {
        document.getElementById("solution").textContent = largePrime(x,isPrime);
    } else if (problem == "palindrome") {
        document.getElementById("solution").textContent = palindrome(x);
    } else if (problem == "smallMult") {
        document.getElementById("solution").textContent = smallMult(x);
    } else if (problem == "sumSquare") {
        document.getElementById("solution").textContent = sumSquare(x);
    } else if (problem == "nthPrime") {
        document.getElementById("solution").textContent = nthPrime(x,isPrime);
    } else if (problem == "largestProduct") {
        document.getElementById("solution").textContent = largestProduct(x);
    }
    //Need to change modules to return value to be
    // then set in this file to make them independant
}