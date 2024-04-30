
function calcularROI() {
    const costoInicial = parseFloat(document.getElementById("costoInicial").value);
    const ingresosAnuales = parseFloat(document.getElementById("ingresosAnuales").value);
    const gastosAnuales = parseFloat(document.getElementById("gastosAnuales").value);

    const beneficioNetoAnual = ingresosAnuales - gastosAnuales;
    const ROI = (beneficioNetoAnual / costoInicial) * 100;

    document.getElementById("resultadoROI").style.display = "block";
    document.getElementById("roiResultado").innerText = "El ROI de la propiedad es: " + ROI.toFixed(2) + "%";
}
