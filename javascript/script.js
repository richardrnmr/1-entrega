function calculateMultipleTips() {
    const amount = parseFloat(document.getElementById("amount").value);

    // Condicional para validar el monto ingresado
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Por favor, ingrese un monto válido.";
        return;
    }

    // Array de porcentajes de propina que queremos calcular
    const tipPercentages = [5, 10, 15, 20];
    let resultText = `Monto de consumo: $${amount.toFixed(2)}\n\nResultados para varios porcentajes de propina:\n`;

    // Ciclo para calcular la propina y el total para cada porcentaje
    for (let i = 0; i < tipPercentages.length; i++) {
        const tipPercentage = tipPercentages[i];
        const tipAmount = amount * (tipPercentage / 100);
        const totalAmount = amount + tipAmount;

        // Agregamos el resultado de cada porcentaje a la cadena de texto
        resultText += `Propina (${tipPercentage}%): $${tipAmount.toFixed(2)} - Total a pagar: $${totalAmount.toFixed(2)}\n`;
    }

    // Mostramos el resultado en pantalla
    document.getElementById("result").innerText = resultText;
}
