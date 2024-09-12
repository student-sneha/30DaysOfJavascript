const inputBox = document.querySelector(".input-box");
const searchIcon = document.querySelector("i");
const imagesContainer = document.querySelector(".images-container");
const form = document.querySelector("form");
const apiKey = "76d9aadf";

// to display movies
const moviestoShow = (movies) => {
  imagesContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("imageDiv");
    movieCard.innerHTML = `<img src="${movie.Poster}" alt="${movie.Title}">`;

    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    const overlayText = document.createElement("h3");
    overlayText.innerText = `${movie.Title} & ${movie.Year}`;

    overlayElement.appendChild(overlayText);
    movieCard.appendChild(overlayElement);
    imagesContainer.append(movieCard);

  });
};

// to fetch random movies 
const fetchMovies = async () => {
  imagesContainer.innerHTML = "<h2>Loading movies...</h2>";

  // array to display random movies
  const randomSearch = ["action", "comedy", "drama", "adventure"];
  const randomTerm =
    randomSearch[Math.floor(Math.random() * randomSearch.length)];

  await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${randomTerm}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Search && data.Search.length > 0) {
        moviestoShow(data.Search);
      } else {
        imagesContainer.innerHTML = `<h2>No random movie found!<h2>`;
      }
    })
    .catch((err) => {
      console.log("Error Fetching random movies :", err);
      imagesContainer.innerHTML = `<h2>Error fetching movies. Please try again later.</h2>`;
    });
};

// to display search movies 
const searchMovies = async () => {
  const searchInput = inputBox.value.trim();
  console.log(searchInput);
  if (searchInput !== "") {
    imagesContainer.innerHTML = `<p>Loading movies...</p>`;

    await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search && data.Search.length > 0) {
          moviestoShow(data.Search);
        } else {
          imagesContainer.innerHTML =
            "<p>No movies found with the given name!</p>";
        }
      })
      .catch((err) => {
        console.log("Error Fetching random movies :", err);
        imagesContainer.innerHTML = `<h2>Error fetching movies. Please try again later.</h2>`;
      });
  } else {
    alert("Enter a movie title then search!");
  }
};

searchIcon.addEventListener("click", () => {
  searchMovies();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchMovies();
});

document.addEventListener("DOMContentLoaded", function () {
  fetchMovies();
});
