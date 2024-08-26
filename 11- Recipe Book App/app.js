const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeConatiner = document.querySelector(".recipe-container");
const errorImage = document.querySelector(".error-image");

const getRecipes = async (query) => {
  recipeConatiner.innerHTML = "Fetching Recepies....";
 
  try{
    const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
    
      recipeConatiner.innerHTML = "";
      data.meals.forEach((meal) => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");
        recipeDiv.innerHTML = `
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>
            <p><span>${meal.strArea}</span> Dish</p>
            <p>Belongs to <span>${meal.strCategory}<span> Category</p>`;
    
        const recipeLink = document.createElement("a");
        recipeLink.href= meal.strSource;
        recipeLink.classList.add("linkBtn");
        recipeLink.innerHTML = "View Recipe";
    
        recipeDiv.appendChild(recipeLink);
        recipeConatiner.appendChild(recipeDiv);

        errorImage.style.display="none";
      });
 }catch(err){
     recipeConatiner.innerHTML = "Error in Fetching Recepies....";
     errorImage.style.display="block";
 }
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  if(!searchInput){
    recipeConatiner.innerHTML = "<h2>Type the meal in the search box</h2>";
    return;
  }
  getRecipes(searchInput);
});
