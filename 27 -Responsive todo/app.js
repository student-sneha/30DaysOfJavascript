let tasks = JSON.parse(localStorage.getItem("tasks") || []);
let editIndex = null;

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  if (editIndex !== null) {
    tasks[editIndex].text = task;
    editIndex = null;
  } else {
    tasks.push({ text: task, completed: false });
  }

  input.value = "";
  document.getElementById("addBtn").textContent = "Add";
  saveAndRenderTasks();
}

function saveAndRenderTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex align-items-center justify-content-between flex-wrap";

    const label = document.createElement("label");
    label.className = `form-check-label d-flex align-items-center gap-2`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = `form-check-input`;
    checkbox.checked = task.completed;
    checkbox.onclick = () => toggleTask(index);

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
      span.classList.add("completed");
    }

    label.appendChild(checkbox);
    label.appendChild(span);

    const btnGroup = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    editBtn.className = "btn btn-warning btn-sm me-2";
    editBtn.onclick = () => editTask(index);

    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    delBtn.className = "btn btn-danger btn-sm";
    delBtn.onclick = () => delTask(index);
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(delBtn);

    li.appendChild(label);
    li.appendChild(btnGroup);
    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRenderTasks();
}

function delTask(index) {
  tasks.splice(index, 1);
  saveAndRenderTasks();
}

function editTask(index) {
  document.getElementById("taskInput").value = tasks[index].text;
  editIndex = index;
  document.getElementById("addBtn").textContent = "Save";
}

document.getElementById("addBtn").addEventListener("click", addTask);
saveAndRenderTasks();

// Theme Toggle
const themeBtn = document.createElement("button");
themeBtn.id = "themeBtn";
themeBtn.className =
  "btn btn-outline-secondary position-fixed top-0 end-0 m-3 z-3";
themeBtn.textContent = "🌙";
document.body.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});
