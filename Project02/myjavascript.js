document.addEventListener("DOMContentLoaded", function () {

let taskarray = [];


document.querySelector("#task-form").onsubmit = function () {

  let task_title = document.querySelector("#task-title").value;
  let task_name = document.querySelector("#task-title").value;
  let priority = document.querySelector("#task-priority").value;


  let status_radios = document.getElementsByName("task-status");
  let task_status;
  for (let i = 0; i < status_radios.length; i++) {
      if (status_radios[i].checked) {
          task_status = status_radios[i].value;
          break;
      }
  }
  
  let task = {
     "task-id": taskarray.length + 1,
    "task-name": task_name,
    "task-priority": priority,
    "status": task_status
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

    for (let idx = 0; idx < taskarray.length; idx++) {
        if (taskarray[idx]["task-id"] == task["task-id"]) {
            taskarray[idx]["status"] = "completed";
        }
    }

    li.style.color = "green";
    li.style.textDecoration = "line-through";

    console.log(taskarray);
};
  
  li.appendChild(completebutt);

  let removebutt = document.createElement("button");
        removebutt.innerHTML = "Remove";
        removebutt.type = "button";
        removebutt.style.marginLeft = "5px";

      removebutt.onclick = function () {
      
          for (let i = 0; i < taskarray.length; i++) {
              if (taskarray[i]["task-id"] == task["task-id"]) {
                  taskarray.splice(i, 1);
              }
          }
      
          li.remove();
          console.log(taskarray);
      };

        li.appendChild(removebutt);


  li.onclick = Myhandler;
  
  function Myhandler(event){
      console.log(event.target);
  }
 
     
document.querySelector("#tasklist").appendChild(li);
return false;
  
};
  
});
