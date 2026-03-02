document.addEventListener("DOMContentLoaded", function () {

let taskarray = [];


document.querySelector("#task-form").onsubmit = function () {

  let task_title = document.querySelector("#task-title").value;

  let task = {
    "task-id": taskarray.length + 1,
    "task-name": task_title,
    "task-priority": "low",
    "status": "pending"
};


  taskarray.push(task);
  console.log(taskarray);

  let li = document.createElement("li");
  li.innerHTML = task["task-name"];

  document.querySelector("#tasklist").appendChild(li);

  li.onclick = function (event) {
    console.log(event.target);
 
    
};
return false;
  
};
  
});
