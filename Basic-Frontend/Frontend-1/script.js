// Get elements from HTML
const form = document.querySelector(".todo-form");
const input = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Prevent page refresh
  event.preventDefault();

  // Get input value
  const task = input.value.trim();

  // Don't add empty tasks
  if (task === "") {
    return;
  }

  // Create Todo
  createTodo(task);

  // Clear input
  input.value = "";
});

// Function to create a Todo
function createTodo(task) {
  // Create main Todo container
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  // Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Create Todo text
  const todoText = document.createElement("span");
  todoText.classList.add("todo-text");
  todoText.textContent = task;

  // Create Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  // Create Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Complete Todo
  checkbox.addEventListener("change", function () {
    todoText.classList.toggle("completed");
  });

  // Delete Todo
  deleteButton.addEventListener("click", function () {
    todoItem.remove();
  });

  // Edit Todo
  editButton.addEventListener("click", function () {
    const newTask = prompt("Edit your task:", todoText.textContent);

    if (newTask !== null && newTask.trim() !== "") {
      todoText.textContent = newTask.trim();
    }
  });

  // Add elements to Todo item
  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);

  // Add Todo item to Todo list
  todoList.appendChild(todoItem);
}
