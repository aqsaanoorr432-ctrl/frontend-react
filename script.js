// =========================
// TASK MANAGER
// =========================

// Get HTML elements
let taskInput = document.getElementById("taskInput");
let saveTask = document.getElementById("saveTask");
let pendingTasks = document.getElementById("pendingTasks");
let completedTasks = document.getElementById("completedTasks");


// Add Task
saveTask.addEventListener("click", function () {

    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create new list item
    let li = document.createElement("li");

    li.innerText = task;

    // Add Delete button
    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.style.marginLeft = "10px";

    // Delete task
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // Add button inside task
    li.appendChild(deleteButton);

    // Add task to pending
    pendingTasks.appendChild(li);

    // Clear input
    taskInput.value = "";

});


// =========================
// COMPLETE TASK
// =========================

pendingTasks.addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {

        completedTasks.appendChild(event.target);

    }

});


// =========================
// CALCULATOR
// =========================

let counter = 0;


// Math operation
function mathOp(operator) {

    let number = Number(document.getElementById("numInput").value);

    if (isNaN(number)) {
        alert("Please enter a number");
        return;
    }

    if (operator === "+") {
        counter = counter + number;
    }

    if (operator === "-") {
        counter = counter - number;
    }

    if (operator === "*") {
        counter = counter * number;
    }

    if (operator === "/") {

        if (number === 0) {
            alert("Cannot divide by zero");
            return;
        }

        counter = counter / number;
    }

    document.getElementById("counterDisplay").innerText = counter;
}


// Equal button
function showResult() {

    document.getElementById("counterDisplay").innerText = counter;

}


// Reset calculator
function resetAll() {

    counter = 0;

    document.getElementById("counterDisplay").innerText = 0;

    document.getElementById("numInput").value = "";

}