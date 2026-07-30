// ===============================
// Service Booking App
// ===============================

// Available Services

const services = [
    {
        name: "Dry Cleaning",
        price: 200,
        image: "images/dry-cleaning.jpg"
    },
    {
        name: "Sofa Cleaning",
        price: 500,
        image: "images/sofa-cleaning.jpg"
    },
    {
        name: "Carpet Cleaning",
        price: 450,
        image: "images/carpet-cleaning.jpg"
    },
    {
        name: "Laundry",
        price: 250,
        image: "images/laundry.jpg"
    },
    {
        name: "Leather Cleaning",
        price: 600,
        image: "images/leather-cleaning.jpg"
    }
];

// ===============================
// Variables
// ===============================

let currentIndex = 0;
let cart = [];

// ===============================
// Elements
// ===============================

const serviceImage = document.getElementById("serviceImage");
const serviceName = document.getElementById("serviceName");
const servicePrice = document.getElementById("servicePrice");

const addBtn = document.getElementById("addBtn");
const skipBtn = document.getElementById("skipBtn");

const cartTable = document.getElementById("cartTable");
const totalPrice = document.getElementById("totalPrice");
const emptyRow = document.getElementById("emptyRow");

const bookingForm = document.getElementById("bookingForm");

// ===============================
// Show Current Service
// ===============================

function loadService() {

    if (currentIndex >= services.length) {

        serviceImage.src = "";
        serviceName.innerHTML = "No More Services";
        servicePrice.innerHTML = "";

        addBtn.disabled = true;
        skipBtn.disabled = true;

        return;
    }

    const service = services[currentIndex];

    serviceImage.src = service.image;
    serviceName.textContent = service.name;
    servicePrice.textContent = "₹" + service.price.toFixed(2);
}

loadService();

// ===============================
// Add Item
// ===============================

addBtn.addEventListener("click", () => {

    const service = services[currentIndex];

    const exists = cart.find(item => item.name === service.name);

    if (!exists) {

        cart.push(service);

        updateCart();
    }

    currentIndex++;

    loadService();

});

// ===============================
// Skip Item
// ===============================

skipBtn.addEventListener("click", () => {

    currentIndex++;

    loadService();

});

// ===============================
// Update Cart
// ===============================

function updateCart() {

    cartTable.innerHTML = "";

    if (cart.length === 0) {

        cartTable.innerHTML = `

        <tr id="emptyRow">

            <td colspan="3" class="empty">

                <div class="empty-icon">
                    <i class="fa-solid fa-circle-info"></i>
                </div>

                <h3>No Items Added</h3>

                <p>Add items to the cart from the services bar</p>

            </td>

        </tr>

        `;

        totalPrice.textContent = "₹0.00";

        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${index + 1}</td>

            <td>${item.name}</td>

            <td>₹${item.price.toFixed(2)}</td>

        `;

        cartTable.appendChild(row);

    });

    totalPrice.textContent = "₹" + total.toFixed(2);

}

// ===============================
// Booking Form
// ===============================

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    if (cart.length === 0) {

        alert("Please add at least one service.");

        return;
    }

    if (name === "") {

        alert("Enter your name.");

        return;
    }

    if (email === "") {

        alert("Enter your email.");

        return;
    }

    if (phone.length !== 10) {

        alert("Enter a valid phone number.");

        return;
    }

    alert(
        "Booking Successful!\n\n" +
        "Customer : " + name +
        "\nServices : " + cart.length +
        "\nTotal Amount : ₹" +
        cart.reduce((sum, item) => sum + item.price, 0)
    );

    bookingForm.reset();

    cart = [];

    currentIndex = 0;

    updateCart();

    loadService();

});

// ===============================
// Initialize
// ===============================

updateCart();