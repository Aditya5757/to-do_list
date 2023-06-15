// Selecting elements
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const filters = document.querySelectorAll('input[name="filter"]');

// Function to create a new todo item
function createTodo() {
  const newTodo = document.createElement("li");
  const todoText = document.createTextNode(todoInput.value);
  newTodo.appendChild(todoText);

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function() {
    newTodo.remove();
  });

  newTodo.appendChild(deleteButton);
  todoList.appendChild(newTodo);
  todoInput.value = "";
}

// Function to handle todo item completion
function toggleTodoComplete(todoItem) {
  todoItem.classList.toggle("completed");
}

// Function to filter todo items based on the selected filter
function filterTodos(filter) {
  const todoItems = todoList.getElementsByTagName("li");
  Array.from(todoItems).forEach(function(todoItem) {
    switch (filter) {
      case "active":
        todoItem.style.display = todoItem.classList.contains("completed") ? "none" : "flex";
        break;
      case "completed":
        todoItem.style.display = todoItem.classList.contains("completed") ? "flex" : "none";
        break;
      default:
        todoItem.style.display = "flex";
        break;
    }
  });
}

// Event listeners
addButton.addEventListener("click", function() {
  if (todoInput.value !== "") {
    createTodo();
  }
});

todoInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && todoInput.value !== "") {
    createTodo();
  }
});

todoList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    toggleTodoComplete(event.target);
  }
});

filters.forEach(function(filter) {
  filter.addEventListener("change", function() {
    filterTodos(this.value);
  });
});
