
function calcularROI() {
    const costoInicial = parseFloat(document.getElementById("costoInicial").value);
    const ingresosAnuales = parseFloat(document.getElementById("ingresosAnuales").value);
    const gastosAnuales = parseFloat(document.getElementById("gastosAnuales").value);

    const beneficioNetoAnual = ingresosAnuales - gastosAnuales;
    const ROI = (beneficioNetoAnual / costoInicial) * 100;

    document.getElementById("resultadoROI").style.display = "block";
    document.getElementById("roiResultado").innerText = "El ROI de la propiedad es: " + ROI.toFixed(2) + "%";
}


document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto
    
    // Aquí podrías realizar alguna validación del formulario si lo deseas
    
    // Simulación de envío del formulario (aquí enviarías los datos al servidor)
    // Después de enviar exitosamente, muestra el mensaje de éxito
    document.getElementById("mensajeEnvio").style.display = "block";
});
