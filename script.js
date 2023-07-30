document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Done";
        deleteBtn.classList.add("delete-btn");
  
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
  
        li.style.animation = "fadeIn 0.5s";
        li.addEventListener("animationend", () => {
          li.style.animation = "";
        });
  
        taskInput.value = "";
      }
    });
  
    taskList.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        const li = event.target.parentElement;
        li.style.animation = "fadeOut 0.5s";
        li.addEventListener("animationend", () => {
          taskList.removeChild(li);
        });
      }
    });
  });
  