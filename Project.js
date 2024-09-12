// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

// Set the initial state to dark mode
document.body.classList.add('active'); // Adds dark mode class to body
darkmode.classList.replace('bx-moon', 'bx-sun'); // Updates the icon to sun

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-sun')) {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active'); // Switches to white mode
    } else {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active'); // Switches back to dark mode
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
  })
