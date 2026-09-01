let total = 0;
let savedOp = '';
let display = document.getElementById('counterDisplay');
let input = document.getElementById('numInput');

// Operation (+, -, *, /) select karne par
function mathOp(op) {
    let val = parseFloat(input.value);
    
    if (isNaN(val)) {
        alert("Please enter a number first!");
        return;
    }

    if (savedOp === '' && total === 0 && display.textContent === '0') {
        total = val;
    } else {
        calculate(val);
    }

    savedOp = op;
    display.textContent = total;
    input.value = '';
}

// Equal (=) click 
function showResult() {
    let val = parseFloat(input.value);
    
    if (isNaN(val)) {
        alert("Please enter a number to calculate!");
        return;
    }

    if (savedOp !== '') {
        calculate(val);
        display.textContent = total;
        input.value = '';
        savedOp = '';
    }
}

// Calculation function
function calculate(val) {
    if (savedOp === '+') total += val;
    else if (savedOp === '-') total -= val;
    else if (savedOp === '*') total *= val;
    else if (savedOp === '/') {
        if (val === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        total /= val;
    }
}

// Reset karne ke liye
function resetAll() {
    total = 0;
    savedOp = '';
    display.textContent = '0';
    input.value = '';
}