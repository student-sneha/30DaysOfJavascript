
  const sidemenu = document.querySelector(".nav-links");
  const close = document.querySelector("#closebtn");
  const barMenu = document.querySelector("#bars");
  const navLink = document.querySelector(".nav-item");


  close.addEventListener("click",()=>{
    sidemenu.style.right="0";
    sidemenu.style.display="none";
  });

  barMenu.addEventListener("click",()=>{
    sidemenu.style.display="block";
    sidemenu.style.display.right="-200px";
  });

  navLink.addEventListener("click",()=>{
    sidemenu.style.display="none";
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
  })