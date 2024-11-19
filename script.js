document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userX = document.getElementById("userX").value;
    const grauSelecionado = document.getElementById("grau").value;

    let resultado;

    if (grauSelecionado === "1") {
        resultado = PrimeiroGrau(userX);
    } else if (grauSelecionado === "3") {
        resultado = terceiroGrau(userX);
    }

    exibirPrecos(resultado, userX);
});

function exibirPrecos(valor, userX) { 
    const divPrecos = document.getElementById("divPrecos");
    divPrecos.innerHTML = "";

    const preco = document.createElement("div");
    preco.setAttribute("class", "preco");
    preco.innerHTML = `<span style="color: white;">A média do Euro no ano de ${userX} é R$ ${valor.toFixed(2)}</span>`;
    divPrecos.appendChild(preco);
}

function PrimeiroGrau(x) {
    // Coeficientes do primeiro grau
    let a = 0.137872332;
    let b = -273.8098087;

    let resultado = a*x + b;
    return resultado;
}

function terceiroGrau(x) {
    // Coeficientes do terceiro grau
    let a = -0.00101030201694859;
    let b = 6.115931627;
    let c = -12340.7795;
    let d = 8300253.592;

    let resultado = a*Math.pow(x, 3) + b*Math.pow(x, 2) + c*x + d;
    return resultado;
}
