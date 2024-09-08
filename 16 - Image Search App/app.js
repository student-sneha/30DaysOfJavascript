const searcFrom = document.querySelector("form");
const imagesContainer = document.querySelector(".images-container");
const searchInput = document.querySelector(".search-input");
const loadMoreBtn = document.querySelector(".loadMoreBtn");
const searchIcon = document.querySelector('i');
let page = 1;

const accesskey = "afbq9ROQloErc8pSLZFe5VRCn-LW8mSY_AQUXc-dLeM";


// Add event listener to search icon to click and search the input text
searchIcon.addEventListener('click', ()=>{
  const inputText = searchInput.value.trim();
  if(!inputText){
    alert("Please enter a search query.");
    return;
  }
  if (inputText !== "") {
     page = 1;
    fetchImages(inputText,page);
  } else {
    imagesContainer.innerHTML = `<h2>Please  enter a search query</h2>`;
    if(loadMoreBtn.style.display === 'block'){
      loadMoreBtn.style.display = 'none';
    }
  }
})

// function to fetch images using unsplash API
const fetchImages = async (query,pageNo) => {
  try{
    if(pageNo === 1){
      imagesContainer.innerHTML = "";
    }
  
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${accesskey}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    if(data.results.length > 0 ){
      data.results.forEach((photo) => {
        const imageElement = document.createElement("div");
        imageElement.classList.add("imageDiv");
        imageElement.innerHTML = `<img src="${photo.urls.regular}">`;
    
        const overlayElement = document.createElement("div");
        overlayElement.classList.add("overlay");
    
        const overlayText = document.createElement("h3");
        overlayText.innerText = `${photo.alt_description}`;
    
        overlayElement.appendChild(overlayText);
        imageElement.appendChild(overlayElement);
        imagesContainer.append(imageElement);
      });
    
      if(data.total_pages === pageNo){
        loadMoreBtn.style.display ='none';
      }else{
        loadMoreBtn.style.display ='block';
      }
    }else{
      imagesContainer.innerHTML = `<h2>No image found</h2>`;
      if(loadMoreBtn.style.display === 'block'){
        loadMoreBtn.style.display = 'none';
      }
    }
  }
  catch (err){
    imagesContainer.innerHTML = `<h2>Failed to fetch images, Please try again later.</h2>`;
  }
}

// Adding Event Listener to search form
searcFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputText = searchInput.value.trim();
  if(!inputText){
    alert("Please enter a search query.");
    return;
  }
  if (inputText !== "") {
     page = 1;
    fetchImages(inputText,page);
  } else {
    imagesContainer.innerHTML = `<h2>Please  enter a search query</h2>`;
    if(loadMoreBtn.style.display === 'block'){
      loadMoreBtn.style.display = 'none';
    }
  }
});

// Adding Event Listener to load more 
loadMoreBtn.addEventListener("click", ()=>{
  fetchImages(searchInput.value.trim(),++page);
})