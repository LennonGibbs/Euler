function fibEven(num) {
    let total = 0;
    let current = 1;
    let prev = 0;
    let temp = 0;
    while (current < num) {
        temp = current + prev;
        prev = current;
        current = temp;
        if (current % 2 == 0) {
            total += current;
        }
    }
    document.getElementById("solution").textContent = total;
}