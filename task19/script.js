// ===============================
// Service Booking Application
// ===============================

// Services Data
var services = [
    {
        name: "Dry Cleaning",
        price: 200,
        image: "../task19/images/dry.png"
    },
    {
        name: "Sofa Cleaning",
        price: 400,
        image: "../task19/images/sofa.jpg"
    },
    {
        name: "Carpet Cleaning",
        price: 350,
        image: "../task19/images/carpet.jpg"
    },
    {
        name: "Laundry",
        price: 250,
        image: "../task19/images/laundry.png"
    },
    {
        name: "Leather Cleaning",
        price: 500,
        image: "../task19/images/leather.jpg"
    }
];

// Variables
var currentService = 0;
var cart = [];

// HTML Elements
var serviceImage = document.getElementById("serviceImage");
var serviceName = document.getElementById("serviceName");
var servicePrice = document.getElementById("servicePrice");

var addButton = document.getElementById("nextCartButton");
var skipButton = document.getElementById("skipButton");
var bookButton = document.getElementById("bookButton");

var cartTable = document.getElementById("cartTable");
var totalPrice = document.getElementById("totalPrice");

// ===============================
// Display Service
// ===============================

function showService() {

    if (currentService >= services.length) {

        serviceImage.src = "";
        serviceName.innerHTML = "No More Services";
        servicePrice.innerHTML = "";

        addButton.disabled = true;
        skipButton.disabled = true;

        return;
    }

    serviceImage.src = services[currentService].image;
    serviceName.innerHTML = services[currentService].name;
    servicePrice.innerHTML = "₹" + services[currentService].price;
}

showService();

// ===============================
// Add Service
// ===============================

addButton.onclick = function () {

    cart.push(services[currentService]);

    updateTable();

    currentService++;

    showService();

};

// ===============================
// Skip Service
// ===============================

skipButton.onclick = function () {

    currentService++;

    showService();

};

// ===============================
// Update Cart
// ===============================

function updateTable() {

    cartTable.innerHTML = "";

    var total = 0;

    if (cart.length == 0) {

        cartTable.innerHTML =
            "<tr>" +
            "<td colspan='3'>No Items Added</td>" +
            "</tr>";

        totalPrice.innerHTML = "₹0";

        return;
    }

    for (var i = 0; i < cart.length; i++) {

        var row = document.createElement("tr");

        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var cell3 = document.createElement("td");

        cell1.innerHTML = i + 1;
        cell2.innerHTML = cart[i].name;
        cell3.innerHTML = "₹" + cart[i].price;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);

        cartTable.appendChild(row);

        total = total + cart[i].price;
    }

    totalPrice.innerHTML = "₹" + total;

}

// ===============================
// Booking Form
// ===============================

bookButton.onclick = function (event) {

    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    if (cart.length == 0) {
        alert("Please add at least one service.");
        return;
    }

    if (name == "") {
        alert("Enter your name.");
        return;
    }

    if (email == "") {
        alert("Enter your email.");
        return;
    }

    if (phone == "") {
        alert("Enter your phone number.");
        return;
    }

    if (phone.length != 10) {
        alert("Phone number should contain 10 digits.");
        return;
    }

    if (password == "") {
        alert("Enter your password.");
        return;
    }

    if (password.length < 6) {
        alert("Password should contain at least 6 characters.");
        return;
    }

    alert("Booking Successful!");

    // Reset Form
    document.getElementById("bookingForm").reset();

    // Reset Cart
    cart = [];
    currentService = 0;

    updateTable();
    showService();

};

// ===============================
// Initial Table
// ===============================

updateTable();