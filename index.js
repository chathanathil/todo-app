
class Task {
  static addTaskToList(task) {
    const list = document.querySelector("#task-list");

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${task}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
     `;

    list.appendChild(row);
  }

  static deleteTask(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.querySelector("#task-form");
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

}

//Add a Task
document.querySelector("#task-form").addEventListener("submit", e => {
  e.preventDefault();

  const task = document.querySelector("#task").value;

  // Validate
  if (task === "") {
    Task.showAlert("Please fill the fields", "danger");
  } else {
    Task.addTaskToList(task);
    Task.showAlert("Task Added", "success");
    document.querySelector("#task").value = "";
  }
});

// Remove Task
document.querySelector("#task-list").addEventListener("click", e => {
  Task.deleteTask(e.target);
  Task.showAlert("Task Removed", "success");
});
