# Greenwood Library website

## About the Project

This project is a responsive landing page for **Greenwood Public
Library**. I created it with a clean and modern layout using large
typography, library images, simple colors, and small interactive
effects.

The main purpose of this project was to practice building a complete
webpage using **HTML and Tailwind CSS**.

## Technologies Used

-   HTML5
-   Tailwind CSS
-   Tailwind CSS CDN
-   JavaScript where required
-   No external CSS frameworks
-   No custom fonts

## Sections Included

### Navigation

The navigation contains the Greenwood logo, an "Open Sat" badge, links
to the main sections, and a "Visit Us" button. It also stays at the top
while scrolling.

### Hero Section

The hero section introduces the library with: - Main heading - Short
description - Explore Collection button - Join Free button - Large
library image - Library statistics

### Library Sections

Six cards are included for different areas of the library, such as
Fiction, Children's, Science, History, Arts, and Digital.

The cards have simple hover effects to make the section more
interactive.

### Gallery

The gallery uses a responsive image grid to show different library
spaces. The images have rounded corners and zoom slightly when hovered.

### Values

A bento-style grid is used to highlight important library values such as
community, history, events, digital services, and access.

### About

The About section contains descriptive content about the library.
Tailwind column utilities are used to create an editorial-style text
layout.

### Membership

Three membership plans are included: - Basic - Student - Family

Each card contains an image, price, features, and a CTA button. The
Student plan also includes a Popular badge.

### Testimonial

A testimonial section contains a quote, author name, and profile image.
The profile image changes from grayscale to color when hovered.

### Contact

The contact section includes the library address, opening hours, a Get
Directions button, and an email button.

### Events

Upcoming library events are displayed in a responsive grid with an
image, event title, and date.

### Footer

The footer includes brand information, useful links, library sections,
contact details, social buttons, copyright information, and legal links.

## Responsive Design

The website is designed to work on different screen sizes.

-   **Mobile:** Content changes to a single-column layout where needed.
-   **Tablet:** Grids and spacing adjust to fit smaller screens.
-   **Desktop:** Wider grids and multi-column layouts are used.

Tailwind responsive classes such as `sm:`, `md:`, and `lg:` are used to
handle these changes.

## Tailwind CSS Features Practiced

Some of the Tailwind classes used in the project include:

-   `sticky`
-   `backdrop-blur-md`
-   `relative`
-   `absolute`
-   `grid`
-   `max-w-7xl`
-   `group`
-   `group-hover`
-   `hover:scale-105`
-   `transition-all`
-   `transition-colors`
-   `transition-transform`
-   `grayscale`
-   `hover:grayscale-0`
-   Responsive breakpoint classes

## Project Structure

``` text
greenwood-library/
│
├── index.html
├── script.js
└── README.md
```

Tailwind CSS is loaded through the CDN in `index.html`, so a separate
CSS file is not required for the Tailwind styling.

## How to Run

1.  Open the project folder in Visual Studio Code.
2.  Open `index.html` in a browser.
3.  Resize the browser window to check the responsive layout.
4.  Hover over images and cards to check the interactive effects.
5.  Test the navigation and buttons to make sure they work as expected.

## What I Learned

This project helped me understand how to build a complete responsive
webpage using Tailwind CSS.

I practiced responsive grids, spacing, positioning, hover effects, image
scaling, typography, and Tailwind's `group` and `group-hover` utilities.

I also got more comfortable creating different layouts for mobile,
tablet, and desktop screens without depending on a separate CSS
framework.
