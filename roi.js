
function calcularROI() {
    var costoInicial = document.getElementById("costoInicial").value;
    var ingresosAnuales = document.getElementById("ingresosAnuales").value;
    var gastosAnuales = document.getElementById("gastosAnuales").value;

    if (costoInicial === "" || ingresosAnuales === "" || gastosAnuales === "") {
        alert("Por favor complete todos los campos con números.");
        return;
    }

    if (costoInicial.length < 5 || costoInicial.length > 13) {
        alert("Por favor ingrese números entre 5 y 13 cifras en el costo inicial.");
        return;
    }

    costoInicial = parseInt(costoInicial);
    ingresosAnuales = parseInt(ingresosAnuales);
    gastosAnuales = parseInt(gastosAnuales);

    if (ingresosAnuales < gastosAnuales) {
        alert("Los ingresos anuales no pueden ser menores que los gastos anuales.");
        return;
    }

    if (ingresosAnuales > costoInicial) {
        alert("El costo inicial no puede ser menor a los ingresos anuales");
        return;
    }

    var roi = ((ingresosAnuales - gastosAnuales) / costoInicial) * 100;

    document.getElementById("resultadoROI").style.display = "block";
    document.getElementById("roiResultado").textContent = "El ROI calculado es: " + roi.toFixed(2) + "%";
}