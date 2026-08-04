# Laundry Services Web App

## Project Overview

This project is a simple Laundry Services Web Application created using HTML, CSS and JavaScript.

The purpose of this project is to allow users to view laundry services, add services to a cart, calculate the total amount, and book a service online. The project also sends a booking confirmation email using EmailJS.

---

## Features

- Responsive navigation bar
- Hero section with a "Book a Service Today" button
- Service overview section
- List of laundry services with prices
- Add Item and Remove Item functionality
- Dynamic cart updates
- Total amount calculation
- Booking form with validation
- Booking confirmation email using EmailJS
- Newsletter subscription section
- Footer with useful links and social media icons

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (DOM)
- EmailJS

---

## Folder Structure

```
Laundry Services/

│── index.html
│── style.css
│── script.js
└── README.md
```

---

## How to Run the Project

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Add a few services to the cart.
5. Fill in the booking form.
6. Click **Book Now**.

If EmailJS is configured correctly, a booking confirmation email will be sent.

---

## EmailJS Setup

Before using the booking feature, create an EmailJS account.

Update the following values in `script.js`:

- Public Key
- Service ID
- Template ID

After adding your own EmailJS credentials, the email feature will work correctly.

---

## What I Learned

While working on this project, I learned how to:

- Build a complete web page using HTML and CSS.
- Use Flexbox to create layouts.
- Manipulate HTML elements using JavaScript.
- Add and remove items dynamically using the DOM.
- Calculate the total amount based on selected services.
- Validate form inputs before submitting.
- Connect a web page with EmailJS to send booking confirmation emails.
- Make the website responsive for different screen sizes.

---

## Challenges I Faced

During this project, I faced a few problems.

- Initially, I had difficulty updating the cart dynamically.
- I also had some issues while setting up EmailJS because the Service ID and Template ID were incorrect.
- After checking the console and correcting the EmailJS configuration, the email feature started working properly.
- I also spent some time improving the layout to make it cleaner and more user-friendly.

Working through these issues helped me understand JavaScript and DOM manipulation better.

---

## Future Improvements

Some features that can be added later are:

- User Login and Registration
- Payment Gateway
- Booking History
- Order Tracking
- Admin Dashboard
- Search and Filter Services
- Dark Mode

---
