const createBtn = document.querySelector(".createbtn");
const notesContainer = document.querySelector(".notes-container");
const notes = document.querySelector(".input-box");

const showNotes = ()=> {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();
const updateStorage = () =>{
    localStorage.setItem("notes",notesContainer.innerHTML);
};

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src =`images/delete.webp`;
    inputBox.appendChild(img);
   
    notesContainer.appendChild(inputBox);
});
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelector(".input-box");
        notes.forEach(bnt => {
            bnt.onKeyup = function(){
                updateStorage();
            }
        })
    }
})