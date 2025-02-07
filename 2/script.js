document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const todoForm = document.getElementById("todoForm");
    const todoList = document.getElementById("todoList");
    const logoutButton = document.getElementById("logoutButton");

    // Hardcoded username and password for authentication
    const validUsername = "kalai";
    const validPassword = "kalai";

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check username and password
        if (username === validUsername && password === validPassword) {
            alert("Login successful!");

            // Show the to-do form and list, hide the login form
            todoForm.classList.remove("hidden");
            todoList.classList.remove("hidden");
            logoutButton.classList.remove("hidden");
            loginForm.classList.add("hidden");
        } else {
            alert("Invalid username or password!");
        }
    });

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const task = document.getElementById("task").value;

        if (task.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }

        // Add the new task to the to-do list
        const newTask = document.createElement("li");
        newTask.textContent = task;

        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);
        todoList.appendChild(newTask);

        // Clear the task input field
        document.getElementById("task").value = "";
    });

    logoutButton.addEventListener("click", function () {
        alert("Logged out successfully!");

        // Hide the to-do form and list, show the login form
        todoForm.classList.add("hidden");
        todoList.classList.add("hidden");
        logoutButton.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });
});
