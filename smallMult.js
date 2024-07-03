function smallMult(num) {
    let solution = num;
    while (true) {
        let isSol = true;
        for (let i = 1; i < num+1; i++) {
            if (solution % i != 0) {
                isSol = false;
            }
        }
        if (isSol) {
            document.getElementById("solution").textContent = solution;
            break;
        }
        solution++;
    }
}