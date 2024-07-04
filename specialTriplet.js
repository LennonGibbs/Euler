function specialTriplet() {
    for (let a = 1; a < 1001; a++) {
        for (let b = 1; a + b < 1001; b++) {
            for (let c = 1; a + b + c < 1001; c++) {
                if (a + b + c == 1000 && (a * a) + (b * b) == (c * c)) {
                    document.getElementById("solution").textContent = a*b*c;
                }
            }
        }
    }
}