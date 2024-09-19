const menuBtn  = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener("click",(e) =>{
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
});

navLinks.addEventListener('click',(e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","fa-solid fa-bars");
});

const scrollRevealOption  = {
    distance :"50px",
    origin:"top",
    duration:"1000",
};
ScrollReveal().reveal(".content h1", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".content h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".content h2, .content h6, .content form", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".content p", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".content .socials span", {
    ...scrollRevealOption,
    delay: 2000,
    interval: 500,
  });