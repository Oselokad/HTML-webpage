</head>

<body>

<div class="container">

<h2>My To-Do List</h2>

<form id="todoForm">
<input type="text" id="taskInput" placeholder="Enter a task">
<button type="submit">Add</button>
</form>

<ul id="taskList"></ul>

</div>

<script>

let form = document.getElementById("todoForm");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

form.addEventListener("submit", function(event){

event.preventDefault();

let task = input.value;

if(task !== ""){

let li = document.createElement("li");
li.textContent = task;

list.appendChild(li);

input.value = "";

}

});

</script>
