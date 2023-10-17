function clearDisplay() {
    document.getElementById('res').value = '';
}

function deleteLastChar() {
    var currentValue = document.getElementById('res').value;
    document.getElementById('res').value = currentValue.slice(0, -1);
}

function appendValue(value) {
    document.getElementById('res').value += value;
}
function showHistory() {
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = ''; // Clear the previous history

    // Iterate over the history array and display each calculation
    for (let i = 0; i < history.length; i++) {
        const calculation = history[i];
        const calculationElement = document.createElement('div');
        calculationElement.textContent = `Calculation ${i + 1}: ${calculation}`;
        historyContainer.appendChild(calculationElement);
    }
}

const history = []; // Initialize an array to store calculation history

// Function to perform a calculation and update the history
function calculate() {
    const display = document.querySelector('.display input[type="text"]');
    const result = eval(display.value);
    display.value = result;

    // Store the calculation in the history array
    history.push(display.value);

    // Limit the history to the last 10 calculations
    if (history.length > 10) {
        history.shift(); // Remove the oldest calculation
    }
}

