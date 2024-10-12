const todos = [
  { id: 1, content: "Task A", completed: false, priority: 2 },
  { id: 2, content: "Task B", completed: true, priority: 1 },
  { id: 3, content: "Task C", completed: false, priority: 3 },
  { id: 4, content: "Task D", completed: false, priority: 3 },
];

let activeTodos = todos.slice();

function renderTable(list) {
  const tbody = document.getElementById("todos");
  tbody.innerHTML = "";
  list.forEach((todo) => {
    const tr = document.createElement("tr");

    const tdContent = document.createElement("td");
    tdContent.innerText = todo.content;

    const tdPriority = document.createElement("td");
    tdPriority.innerText = todo.priority;

    const tdCompleted = document.createElement("td");
    const btnCompleted = document.createElement("button");
    btnCompleted.innerText = todo.completed ? "Completed" : "Doing";
    btnCompleted.style.backgroundColor = todo.completed ? "green" : "red";

    btnCompleted.addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderTable(activeTodos);
    });
    tdCompleted.appendChild(btnCompleted);

    const tdAction = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.addEventListener("click", () => {
      if (confirm("Bạn có chắc chắn muốn xóa công việc này không?")) {
        activeTodos = activeTodos.filter((item) => item.id !== todo.id);
        renderTable(activeTodos);
      }
    });
    tdAction.appendChild(btnDelete);

    tr.appendChild(tdContent);
    tr.appendChild(tdPriority);
    tr.appendChild(tdCompleted);
    tr.appendChild(tdAction);
    tbody.appendChild(tr);
  });
}

function sortTodos() {
  activeTodos.sort((a, b) => b.priority - a.priority);
  renderTable(activeTodos);
}
document.querySelector("#sortPriority").addEventListener("click", sortTodos);

function filterCompleted() {
  const completedTodos = activeTodos.filter((todo) => todo.completed);
  renderTable(completedTodos);
}
document
  .querySelector("#filterCompleted")
  .addEventListener("click", filterCompleted);

function filterDoing() {
  const doingTodos = activeTodos.filter((todo) => !todo.completed);
  renderTable(doingTodos);
}
document.querySelector("#filterDoing").addEventListener("click", filterDoing);

function resetTodos() {
  activeTodos = [...todos];
  renderTable(activeTodos);
}
document.querySelector("#reset").addEventListener("click", resetTodos);

renderTable(activeTodos);
