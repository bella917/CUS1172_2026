document.addEventListener("DOMContentLoaded", function () {

let task-array = [];


document.querySelector("#task-form").onsubmit = function () {

  let task_title = document.querySelector("#task-title").value;

  let task = {
    "task-id": task-array.length + 1,
    "task-name": task_title,
    "task-priority": "low",
    "status": "pending"
};


  task-list.push(task);
  console.log(task-list);

  let li = document.createElement("li");
  li.innerHTML = task["task-name"];

  document.querySelector("#tasklist").appendChild(li);

  li.onclick = function (event) {
    console.log(event.target);
 
    return false;
};

  
};
  
});
