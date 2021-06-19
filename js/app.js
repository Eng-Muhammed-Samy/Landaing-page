/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 * @format
 */

/**
 * Define Global Variables
 *
 */
const navbarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach((section) => {
	navbarList.innerHTML += ` <li>
        <a href="#${section.getAttribute('id')}">${section.getAttribute('data-nav')}</a>
     </li> `;
});
let links = navbarList.querySelectorAll('a');

// Add class 'active' to section when near top of viewport
window.onscroll = () => {
	// i = get index of the nearest section
	let nearestSection = 0;
	for (let section in sections) {
		if (window.scrollY >= sections[section].offsetTop - 100) {
			nearestSection = section;
		}
	}
	links.forEach((link, i) => {
		if (i == nearestSection) {
			link.parentElement.classList.add('active');
		} else {
			link.parentElement.classList.remove('active');
		}
	});
};

// Scroll to anchor ID using scrollTO event
for (let i = 0; i < links.length; i++) {
	links[i].onclick = function (e) {
		e.preventDefault();
		window.scrollTo(0, sections[i].offsetTop);
	};
}

// window.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
for (let link in links) {
	links[link].onclick = (e) => {
		e.preventDefault();
		window.scrollTo({ top: sections[link].offsetTop, behavior: 'smooth' });
	};
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
