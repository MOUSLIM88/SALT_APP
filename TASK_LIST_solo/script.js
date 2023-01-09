// Define UI ELEMENT :
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listner :
loadEventListners();
// Load Dom events :
document.addEventListener("DOMContentLoaded", getTasks);
// Load all event listners :
function loadEventListners() {
  // Add task Event :
  form.addEventListener("submit", addTask);
  // Remove task :
  taskList.addEventListener("click", removeTask);
  // clear task event :
  clearBtn.addEventListener("click", clearTasks);
  // filter task events :
  filter.addEventListener("keyup", filterTasks);
}
//Get Tasks from LS:
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function (task) {
    // create element :
    const li = document.createElement("li");
    // add class :
    li.className = "collection-item";
    // create a text node and append :
    li.appendChild(document.createTextNode(task));
    // create new link element :
    const link = document.createElement("a");
    // Add class to the Link :
    link.className = "delete-item secondary-content";
    // Add Icon html :
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li :
    li.appendChild(link);
    // passing the li to the ul :
    taskList.appendChild(li);
  });
}

// Add task :
function addTask(e) {
  // create element :
  const li = document.createElement("li");
  // add class :
  li.className = "collection-item";
  // create a text node and append :
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element :
  const link = document.createElement("a");
  // Add class to the Link :
  link.className = "delete-item secondary-content";
  // Add Icon html :
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li :
  li.appendChild(link);
  // passing the li to the ul :
  taskList.appendChild(li);
  // Store in LS :
  storeInLocalStorage(taskInput.value);
  // clear input :
  taskInput.value = "";

  e.preventDefault();
}
// Storing function :
function storeInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// remove task :
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();

    //Remove from LS :
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
  }
}

// remove from LS:
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      task.splice(index, 1);
    }
  });
  localStorage.setItem("tasks".JSON.stringify(tasks));
}

// Clear tasks :
function clearTasks(e) {
  //   taskList.innerHTML = "";
  // faster :
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  e.preventDefault();
}

// filter tasks function :
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
