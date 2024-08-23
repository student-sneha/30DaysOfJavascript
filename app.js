const btn = document.querySelector("button");
const author = document.querySelector("#author");
const quote = document.querySelector("#quote");

const url = "https://api.api-ninjas.com/v1/quotes?category=success";
const apiKey = "YL1RLPl8rnSuVYXmyyypMA==waIzwPGAu1JWhLy4";

// click button to next quote
btn.addEventListener("click", async() => {
    const randomquote = await getRandomQuote();
    display();
});

const display =() =>{
    quote.style.display="block";
    author.style.display="block";
}

//Call the function to fetch and display a quote
async function getRandomQuote() {
    try{
        // Make a request to the API with the required headers
        const config = {headers : {'X-Api-Key': apiKey}}
        const res = await fetch(url ,config);
        let data = await res.json();

          // Display the quote on your webpage
        quote.innerHTML =  data[0].quote;
        author.innerHTML = data[0].author;
       
    }catch(err){
        console.log("Error",err);
    }
}
