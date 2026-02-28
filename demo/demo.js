// JavaScript Code

// Counter functionality
let counter = 0;

function incrementCounter() {
  counter++;
  updateCounterDisplay();
}

function decrementCounter() {
  counter--;
  updateCounterDisplay();
}

function resetCounter() {
  counter = 0;
  updateCounterDisplay();
}

function updateCounterDisplay() {
  document.getElementById("counter-display").textContent = counter;
}

// Random color generator
function changeColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const colorBox = document.getElementById("color-box");
  colorBox.style.backgroundColor = randomColor;
  colorBox.textContent = randomColor.toUpperCase();
}

// Greeting functionality
function showGreeting() {
  const name = document.getElementById("name-input").value;
  const output = document.getElementById("greeting-output");

  if (name.trim() === "") {
    output.textContent = "Please enter your name!";
    output.style.color = "#e74c3c";
  } else {
    output.textContent = `Hello, ${name}! Welcome to the demo! 👋`;
    output.style.color = "#764ba2";
  }
}

// Dynamic to-do list
function addTodo() {
  const input = document.getElementById("todo-input");
  const todoText = input.value.trim();

  if (todoText === "") {
    alert("Please enter a task!");
    return;
  }

  const list = document.getElementById("dynamic-list");
  const listItem = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = todoText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    list.removeChild(listItem);
  };

  listItem.appendChild(textSpan);
  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);

  input.value = "";
}

// Event listeners - these run after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Allow Enter key to trigger greeting
  document
    .getElementById("name-input")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        showGreeting();
      }
    });

  // Allow Enter key to add todo
  document
    .getElementById("todo-input")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTodo();
      }
    });
});
