const inputElement = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTodo() {
    if(inputElement.value === ''){
        alert("You Should write your task first!!");
    }else{

/*----------------Adding Li item to list container -------------------*/        
        let li = document.createElement("li");
        li.innerHTML = inputElement.value;
        listContainer.appendChild(li);
    
        /*----------------Adding delete sign -------------------*/
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";;
        li.appendChild(span);
    }
    inputElement.value ='';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

