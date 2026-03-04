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


  let completebutt = document.createElement("button");
  completebutt.innerHTML = "Complete";
  completebutt.type = "button";
  completebutt.style.marginLeft = "10px";

  completebutt.onclick = function () {
    task["status"] = "completed";
    li.style.color = "green";
    console.log(taskarray);
        };
  
  li.appendChild(completebutt);

  let removebutt = document.createElement("button");
        removebutt.innerHTML = "Remove";
        removebutt.type = "button";
        removebutt.style.marginLeft = "5px";

        removebutt.onclick = function () {
            for (let i = 0; i < taskarray.length; i++) {
                if (taskarray[i]["task-id"] === task["task-id"]) {
                    taskarray.splice(i, 1);
                    break;
                }
            }

            li.remove();
            console.log(taskarray); };

        li.appendChild(removebutt);


  li.onclick = function (event) {
    console.log(event.target);
 
     
};
document.querySelector("#tasklist").appendChild(li);
return false;
  
};
  
});
