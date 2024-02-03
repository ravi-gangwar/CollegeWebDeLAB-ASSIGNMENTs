function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input !== "") {
      var taskList = document.getElementById("taskList");
      var li = document.createElement("li");
      li.textContent = input;
      li.onclick = function() {
        this.classList.toggle("completed");
      };
  
      var removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = function() {
        this.parentNode.remove();
      };
  
      li.appendChild(removeBtn);
      taskList.appendChild(li);
      document.getElementById("taskInput").value = "";
    }
  }