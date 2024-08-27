const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const btn = document.querySelector(".search-btn");
const inputBox = document.querySelector("#input-text");

btn.addEventListener("click", () => {
  let inputWord = inputBox.value;
  fetch(`${url}${inputWord}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    //   console.log(data[0].meanings[0].partOfSpeech);
      console.log(data[0].meanings[0].synonyms[0]);

      result.innerHTML = `
               <div class="word">
                    <h3>${inputWord}</h3>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetics[1].text} </p>
                </div>

                <h4>Meaning</h4>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>

                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>

                <p class="synonyms">
                    ${data[0].meanings[0].synonyms || ""}
                </p>`;
    })
    .catch(()=> {
        result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
});

inputBox.addEventListener("input" ,()=>{
    const inputValue = inputBox.value;
    if(/[^a-zA-Z0-9]/.test(inputValue)) {
        alert("Only Alphanumeric characters are allowed..");
        inputBox.value = inputValue.replace(/[^a-zA-Z0-9]/g,"");
    }
});

