// ===============================
// Scroll to Booking Section
// ===============================
emailjs.init("M2pJPNMYEi9zpWjfP");

let scrollButton = document.getElementById("scrollBtn");
scrollButton.addEventListener("click", function () {
    let bookingSection = document.getElementById("services");
    bookingSection.scrollIntoView({
        behavior: "smooth"
    });
});


// ===============================
// Variables
// ===============================

let addButtons = document.querySelectorAll(".addBtn");
let removeButtons = document.querySelectorAll(".removeBtn");
let cartList = document.getElementById("cartList");
let totalAmount = document.getElementById("totalAmount");
let emptyMessage = document.getElementById("emptyMessage");


// This array stores all selected services

let cart = [];
// ===============================
// Update Cart Function
// ===============================

function updateCart() {
    cartList.innerHTML = "";
    if (cart.length === 0) {
        emptyMessage.style.display = "block";
        totalAmount.innerHTML = 0;
        return;
    }

    emptyMessage.style.display = "none";
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = cart[i].name + " <span>₹" + cart[i].price + "</span>";
        cartList.appendChild(item);
        total = total + cart[i].price;
    }
    totalAmount.innerHTML = total;

}

// ===============================
// Add Item
// ===============================

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function () {
        let serviceName = this.dataset.name;
        let servicePrice = Number(this.dataset.price);
        cart.push({
            name: serviceName,
            price: servicePrice
        });
        updateCart();
    });

}



// ===============================
// Remove Item
// ===============================

for (let i = 0; i < removeButtons.length; i++) {

    removeButtons[i].addEventListener("click", function () {

        let serviceName = this.nextElementSibling.dataset.name;

        let itemFound = -1;

        for (let j = 0; j < cart.length; j++) {

            if (cart[j].name === serviceName) {

                itemFound = j;

                break;

            }

        }

        if (itemFound !== -1) {

            cart.splice(itemFound, 1);

            updateCart();

        }

    });

}



// ===============================
// Initial Cart
// ===============================

updateCart();

// =====================================
// Booking Form
// =====================================

let bookButton = document.getElementById("bookNow");

bookButton.addEventListener("click", function () {

    let fullName = document.getElementById("fullName").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let message = document.getElementById("message");

    if (fullName === "" || email === "" || phone === "") {

        message.style.color = "red";

        message.innerHTML = "Please fill all the details.";

        return;

    }

    if (cart.length === 0) {

        message.style.color = "red";

        message.innerHTML = "Please add at least one service.";

        return;

    }

    // Total Price

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        total = total + cart[i].price;

    }


    // Service Names

    let serviceList = "";

    for (let i = 0; i < cart.length; i++) {

        serviceList += cart[i].name;

        if (i < cart.length - 1) {

            serviceList += ", ";

        }

    }


    // EmailJS

    emailjs.init("M2pJPNMYEi9zpWjfP");


    let templateParams = {

        customer_name: fullName,
        customer_email: email,
        customer_phone: phone,
        services: serviceList,
        total_amount: total

    };


    emailjs.send(

        "service_b0vajgi",
        "template_22ukun5",
        templateParams

    )

   .then(function (response) {

    console.log("Email Sent Successfully");
    console.log(response);

    message.style.color = "green";
    message.innerHTML = "Thank you for booking the service. We will get back to you soon!";

    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    cart = [];
    updateCart();

})
.catch(function (error) {

    console.log("EmailJS Error:", error);

    message.style.color = "red";
    message.innerHTML = "Unable to send booking email.";

});

});

// =====================================
// Newsletter
// =====================================

let subscribeButton = document.querySelector(".newsletter button");
subscribeButton.addEventListener("click", function () {
    let inputs = document.querySelectorAll(".newsletter input");
    let name = inputs[0].value.trim();
    let email = inputs[1].value.trim();
    if (name === "" || email === "") {
        alert("Please enter your name and email.");
        return;

    }
    alert("Thank you for subscribing!");
    inputs[0].value = "";
    inputs[1].value = "";

});

// =====================================
// Logout Button
// =====================================

let logoutButton = document.getElementById("logoutBtn");
logoutButton.addEventListener("click", function () {
    let answer = confirm("Do you want to logout?");
    if (answer) {
        alert("You have logged out successfully.");

    }

});

// =====================================
// Optional Console Logs
// =====================================

console.log("Laundry Services App Loaded.");
console.log("Total Services Available :", addButtons.length);