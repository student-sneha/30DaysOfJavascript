  const sidemenu = document.querySelector("#sidemenu");
  const close = document.querySelector("#closebtn");
  const barMenu = document.querySelector("#bars");
  const navItem = sidemenu.querySelector("a");

  close.addEventListener("click",()=>{
    sidemenu.style.right="0";
    sidemenu.style.display="none";
  });

  barMenu.addEventListener("click",()=>{
    sidemenu.style.display="block";
    sidemenu.style.display.right="-200px";
  });

  sidemenu.addEventListener("click",()=>{
    sidemenu.style.display="none";
    navItem.getAttribute("id","nav-item");
  });
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx3Q6BmG-mT3hKcUfYwOrvYsDbdG82rHiLAZePyJyFewBBriK3-9SJKYXV9ONJzSKueYQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.querySelector("#msg");
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message send successfully"
        setTimeout(function(){
            msg.innerHTML= ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  });

  const scrollRevealOption  = {
    distance :"50px",
    origin:"top",
    duration:"1000",
};

  ScrollReveal().reveal(".text h2", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".text h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".text p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".links", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal(".links ,.myimg", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
  });
