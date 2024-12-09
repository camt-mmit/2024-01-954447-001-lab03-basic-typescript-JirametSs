"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const inputComponents = [
        ...document.querySelectorAll('.app-cmp-input input[type="number"].app-elem-input'),
    ];
    inputComponents.forEach((element) => {
        element.addEventListener('change', () => {
            const result = inputComponents.reduce((total, element) => total + (element.valueAsNumber || 0), // Handle NaN values as 0
            0);
            const output = document.querySelector('output.app-elem-result');
            if (output !== null) {
                output.value = `${result.toLocaleString()}`;
            }
            else {
                console.error('output.app-elem-result not found');
            }
        });
    });
});
