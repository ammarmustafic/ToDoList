const taskList = document.querySelector("#taskList");
const addBtn = document.querySelector("#add");
const taskInput = document.querySelector("#task");

addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();

  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task}</span>
            <div class="buttons">
                <button class="completed-btn">Mark Completed</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

taskList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.classList.contains("completed-btn")) {
    li.classList.toggle("completed");
    const btn = li.querySelector(".completed-btn");
    btn.textContent = li.classList.contains("completed")
      ? "Mark Not Completed"
      : "Mark Completed";
  } else if (e.target.classList.contains("delete-btn")) {
    taskList.removeChild(li);
  }
});
