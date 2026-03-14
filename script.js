<!DOCTYPE html>
<html>
<head>
<title>To-Do List</title>
</head>

<body>

<h2>My To-Do List</h2>

<form id="todoForm">
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button type="submit">Add</button>
</form>

<ul id="taskList"></ul>

<script>

let form = document.getElementById("todoForm");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

form.addEventListener("submit", function(event){

    event.preventDefault(); // stops page refresh

    let task = input.value;

    if(task !== ""){

        let li = document.createElement("li");
        li.textContent = task;

        list.appendChild(li);

        input.value = ""; // clear input box
    }

});

</script>

</body>
</html>