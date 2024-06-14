
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



const favoritos = [];

document.querySelectorAll('.favorito').forEach(button => {
    button.addEventListener('click', function() {
        const propiedad = this.closest('.propiedad');
        const propiedadId = propiedad.getAttribute('data-id');
        const propiedadNombre = propiedad.querySelector('h1').innerText;
        
        if (!favoritos.some(fav => fav.id === propiedadId)) {
            favoritos.push({ id: propiedadId, nombre: propiedadNombre });
            actualizarFavoritos();
        }
    });
});



function actualizarFavoritos() {
    const favoritosDiv = document.getElementById('favoritos');
    favoritosDiv.innerHTML = '';

    favoritos.forEach(fav => {
        const favDiv = document.createElement('div');
        favDiv.innerText = fav.nombre;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Eliminar';
        removeButton.addEventListener('click', function() {
            eliminarFavorito(fav.id);
        });

        favDiv.appendChild(removeButton);
        favoritosDiv.appendChild(favDiv);
    });
}

function eliminarFavorito(id) {
    const index = favoritos.findIndex(fav => fav.id === id);
    if (index !== -1) {
        favoritos.splice(index, 1);
        actualizarFavoritos();
    }
}

