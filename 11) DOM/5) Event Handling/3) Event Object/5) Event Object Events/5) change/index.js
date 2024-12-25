document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('textInput');
    const selectInput = document.getElementById('selectInput');
    const output = document.getElementById('output');

    textInput.addEventListener('change', function () {
        output.innerHTML = 'Text input changed to: ' + textInput.value;
    });

    selectInput.addEventListener('change', function () {
        output.innerHTML = 'Select input changed to: ' + selectInput.value;
    });
});