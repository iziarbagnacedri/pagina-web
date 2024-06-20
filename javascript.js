
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


document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const cartSection = document.getElementById('cart-section');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');

    let cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const service = button.getAttribute('data-service');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(service, price);
        });
    });

    cartIcon.addEventListener('click', () => {
        cartSection.classList.toggle('visible');
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Compra finalizada con éxito!');
            cart = [];
            updateCart();
        } else {
            alert('El carrito está vacío.');
        }
    });

    function addToCart(service, price) {
        const item = cart.find(item => item.service === service);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ service, price, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.service} - $${item.price} x ${item.quantity}</span>
                <button class="remove-item" data-service="${item.service}">Eliminar</button>
            `;
            cartItems.appendChild(cartItem);
        });

        cartTotal.innerText = `Total: $${total.toFixed(2)}`;
        cartCount.innerText = cart.length;

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                const service = button.getAttribute('data-service');
                removeFromCart(service);
            });
        });
    }

    function removeFromCart(service) {
        cart = cart.filter(item => item.service !== service);
        updateCart();
    }
});
