# Mock Neopets Homepage

## About
This is a mockup of the Neopets homepage, completely redone from scratch using modern technologies and with a more sleek and modern design. The reason I've chosen to create this is for the learning experience, and as Neopets is where I first started learning web development, I figured it would be fitting to redo their outdated website using React.js and responsive design.

As this is a mockup, it should go without saying that this repo is UNOFFICIAL and UNAFFILIATED with Neopets, Inc. I'm not an employee of Neopets, Inc. or any related companies. You can visit the official site [here](http://www.neopets.com/index.phtml).

## To Do
* A lot! Still in the early stages of this project
* Would like to implement mock Logged In/Logged Out versions of the homepage
* Modals! Neopets really needs to get on board with modals

## The Challenges
The Neopets homepage is incredibly basic and outdated, so bringing my mockup version of the site into the year 2018 has presented some challenges which I will recount in this section:
* **The Design Layout** - The Neopets website design feels nostalgic and cluttered. I created a rough draft layout schematic with the intent of condensing page content while simultaneously modernizing it. So far I'm loosely implementing this draft, as some components may end up feeling redundant.
* **The Navbar** - The dropdown menus of the Neopets navbar are needlessly messy. If I were to be recreating more of the Neopets site than just the homepage, I would propose organizing the the dropdown content of each category into a single page, accessible through a "tab" on the navbar, similar to various social media apps. In the meantime, I've simply opted for a nice FontAwesome icon and text that would theoretically link to such pages.
* **The Clock** - The Neopets clock is basic and falls behind when you linger on the page for too long. I've utilized the Moment-Timezone library within React to create a more accurate live clock.

## Dependencies
* React.js
* Moment-Timezone.js
* FontAwesome
