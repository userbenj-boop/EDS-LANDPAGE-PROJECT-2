let resultField = '';

function appendToResult(value) {
    resultField += value;
}

function clearResult() {
    resultField = '';
}

function calculateResult() {
    try {
        resultField = eval(resultField).toString();
    } catch (error) {
        resultField = 'Error';
    }
}

// Example usage
appendToResult('5');
appendToResult('+');
appendToResult('3');
calculateResult(); // resultField will now be '8'
console.log(resultField); // Output: 8
