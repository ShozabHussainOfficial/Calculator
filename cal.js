const display = document.getElementById('result');
let currentInput = '';
let result = '';

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === '=') {
            try {
                result = eval(currentInput);
                display.textContent = result;
            } catch (error) {
                display.textContent = 'Error';
            }
        } else if (buttonText === 'C') {
            currentInput = '';
            result = '';
            display.textContent = '0';
        } else if (buttonText === '⌫') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput;
        } else {
            currentInput += buttonText;
            display.textContent = currentInput;
        }
    });
});
