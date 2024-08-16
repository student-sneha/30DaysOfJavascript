const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector("#btn");
const listContainer = document.querySelector(".list-container");

let editTodo= null;


// to add a task in todo list
const addTodo = () =>{
    const inputText = inputBox.value.trim();

    if(inputText.length <= 0 ){
        alert("You must right your task first!!");
        return false;
    }
    if(addBtn.innerHTML === "Save"){
        editTodoLocalStorage(editTodo.target.previousElementSibling.innerHTML);
        editTodo.target.previousElementSibling.innerHTML= inputText;
        addBtn.innerHTML = "Add";
        inputBox.value = '';
    }
    else{
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);
    
        // create edit btn
        const editBtn = document.createElement("button");
        editBtn.innerHTML="\u270E";
        editBtn.classList.add("btn","edit");
        li.appendChild(editBtn);
    
        // create delete btn
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML="\u00d7";
        deleteBtn.classList.add("btn","delete");
        li.appendChild(deleteBtn);
    
        listContainer.append(li);
        inputBox.value ='';

        saveTodoLocalStorage(inputText);
    }
}

// to edit or delete task from todo list 
const updateTodo = (e) =>{
    if(e.target.innerHTML === "\u00d7"){
        const deleteTask = e.target.parentElement;
        listContainer.removeChild(deleteTask);
        deleteTodoLocalStorage(deleteTask);
    }
    if(e.target.innerHTML === '\u270E'){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.innerHTML = "Save";
        editTodo = e;
    }
    if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
}
}

const saveTodoLocalStorage = (task) =>{
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos= JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(task);
    localStorage.setItem("todos",JSON.stringify(todos));
}

const getTodoLocalStorage = () => {
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
            
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);
        
            // create edit btn
            const editBtn = document.createElement("button");
            editBtn.innerHTML="\u270E";
            editBtn.classList.add("btn","edit");
            li.appendChild(editBtn);
        
            // create delete btn
            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML="\u00d7";
            deleteBtn.classList.add("btn","delete");
            li.appendChild(deleteBtn);
        
            listContainer.append(li);
        });
}
}
const deleteTodoLocalStorage = (todo) => {
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
  let taskText = todo.children[0].innerHTML;
  let taskIndex = todos.indexOf(taskText);
  todos.splice(taskIndex,1);
  localStorage.setItem("todos",JSON.stringify(todos));
}

const editTodoLocalStorage = (todo) =>{
    let todos = JSON.parse(localStorage.getItem("todos"));
    let editIndex = todos.indexOf(todo);
    todos[editIndex] = inputBox.value;
    localStorage.setItem("todos",JSON.stringify(todos));

}

addBtn.addEventListener("click" ,addTodo);
listContainer.addEventListener('click',updateTodo);
document.addEventListener("DOMContentLoaded",getTodoLocalStorage);
