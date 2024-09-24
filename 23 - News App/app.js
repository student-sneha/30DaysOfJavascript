const api = "3d71166f31df483f9f8b84ceb3004577";
const url = "https://newsapi.org/v2/everything?q=";

const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector("#input-box");
const newContainer = document.querySelector(".card-container");

window.addEventListener("load",()=>{
    fetchNews("India");
});

const showNews = async (news) => {
    newContainer.innerHTML = ``;
   await news.forEach((article) => {
        if(!article.urlToImage)return;
        
        newContainer.innerHTML +=` <div class="card">
                <div class="card-header">
                    <img src="${article.urlToImage}" alt="card-img" id="card-img">
                </div>
                <div class="card-content">
                    <h3 id="new-title">${article.title}</h3>
                    <h4 class="news-source" id="news-source"> ${article.source.name}</h4>
                    <p class="news-des" id="news-des">${article.description}</p>
                </div>
            </div>`;
           
            newContainer.addEventListener("click", ()=>{
                window.open(article.url,"_blank");
            });
    });
};

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${api}`);
    const data = await res.json();
    console.log(data.articles);
    showNews(data.articles);
};

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav = navItem;
    curSelectedNav.classList.add("active");
}

searchBtn.addEventListener("click",() =>{
    const input = searchBox.value;
    if(!input){
        alert("Please write your query!!")
       return;
    }
    else{
        fetchNews(input);
        curSelectedNav?.classList.remove("active");
        curSelectedNav = null;
    }
});

