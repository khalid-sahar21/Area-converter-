document.addEventListener("DOMContentLoaded", function () {
    const converterForm = document.getElementById("converter-form");
    const marlaInput = document.getElementById("marla");
    const result = document.getElementById("result");

    converterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const marla = parseFloat(marlaInput.value);
        if (!isNaN(marla)) {
            const squareFeet = marla * 272.25; // 1 Marla = 272.25 Square Feet (approx.)
            result.textContent = `${marla} Marla is approximately ${squareFeet} Square Feet.`;
        } else {
            result.textContent = "Please enter a valid number of Marla.";
        }
    });
});
