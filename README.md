# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/images/screenshot.png)

### Links

- [Solution](https://www.frontendmentor.io/solutions/intro-section-dropdown-navigation-using-tailwind-css-rk6n50YL9)
- [Live Site](https://antonio-intro-section-dropdown-nav.netlify.app/)

## My process

### Built with

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned about the mouseover and mouseenter event that I used to show and hide the desktop menu when the mouse hovers over the navbar options.

```
// shows the submenu pop up when hovering over a navbar option
<li class="relative">
	// navbar option
	<a id="features-desktop">Features</a>
	// list container
	<div id="features-list-desktop" class="absolute...">
		<ul id="features-menu">
			<li>Todo List</li>
			<li>Calendar</li>
			<li>Reminders</li>
			<li>Planning</li>
		</ul>
	</div>
</li>

// JS
const featuresDesktop = document.getElementById('features-desktop');
const featuresContainer = document.getElementById('features-list-desktop');
const featuresMenu = document.getElementById('features-menu');

featuresDesktop.addEventListener('mouseenter', () => {
	featuresContainer.classList.toggle('hidden');
});

featuresMenu.addEventListener('mouseleave', () => {
	featuresContainer.classList.toggle('hidden');
});

```

### Useful resources

- [Mouseoever Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) - The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.
- [Mouseenter Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event) - The mouseenter event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.

## Author

👤 **Antonio Lopez**

- Website: [Antonio Lopez](https://www.antoniolopez.me/)
- Github: [@antonio-lopez](https://github.com/antonio-lopez)
- Frontend Mentor: [@antonio-lopez](https://www.frontendmentor.io/profile/antonio-lopez)
