const burgerImages = document.querySelectorAll(".burger img");
const toggleImages = document.querySelectorAll(".burger-toggle img");
let currentIdx = 0;

toggleImages[currentIdx].classList.add("active");

burgerImages.forEach((img, idxx) => {
  img.addEventListener("click", () => {
    toggleImages.forEach(toggleImg => toggleImg.classList.remove("active"));
    toggleImages[currentIdx].classList.add("active");
    toggleImages[currentIdx].src = burgerImages[idxx].src;
    currentIdx = (currentIdx + 1) % toggleImages.length;
  });
});

function createStars() {
  const starsContainer = document.getElementById("stars");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * windowWidth}px`;
    star.style.top = `${Math.random() * windowHeight}px`;
    starsContainer.appendChild(star);
  }
}

window.addEventListener("load", createStars);
