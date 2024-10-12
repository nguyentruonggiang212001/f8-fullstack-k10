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
    tr.appendChild(createContentCell(todo));
    tr.appendChild(createPriorityCell(todo));
    tr.appendChild(createCompletedCell(todo));
    tr.appendChild(createActionCell(todo));

    tbody.appendChild(tr);
  });
}

function createContentCell(todo) {
  const tdContent = document.createElement("td");
  tdContent.innerText = todo.content;
  return tdContent;
}

function createPriorityCell(todo) {
  const tdPriority = document.createElement("td");
  tdPriority.innerText = todo.priority;
  return tdPriority;
}

function createCompletedCell(todo) {
  const tdCompleted = document.createElement("td");
  const btnCompleted = document.createElement("button");
  if (todo.completed) {
    btnCompleted.innerText = "Completed";
    btnCompleted.style.backgroundColor = "green";
  } else {
    btnCompleted.innerText = "Doing";
    btnCompleted.style.backgroundColor = "red";
  }
  btnCompleted.addEventListener("click", () => {
    todo.completed = !todo.completed;
    renderTable(activeTodos);
  });
  tdCompleted.appendChild(btnCompleted);
  return tdCompleted;
}

function createActionCell(todo) {
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
  return tdAction;
}

function sortTodos() {
  activeTodos.sort((a, b) => b.priority - a.priority);
  renderTable(activeTodos);
}
document.getElementById("sortPriority").addEventListener("click", sortTodos);

function filterCompleted() {
  const completedTodos = [];
  for (const todo of activeTodos) {
    if (todo.completed) {
      completedTodos.push(todo);
    }
  }
  renderTable(completedTodos);
}
document
  .getElementById("filterCompleted")
  .addEventListener("click", filterCompleted);

function filterDoing() {
  const doingTodos = [];
  for (const todo of activeTodos) {
    if (!todo.completed) {
      doingTodos.push(todo);
    }
  }
  renderTable(doingTodos);
}
document.getElementById("filterDoing").addEventListener("click", filterDoing);

function resetTodos() {
  activeTodos = todos.slice();
  renderTable(activeTodos);
}
document.getElementById("reset").addEventListener("click", resetTodos);

renderTable(activeTodos);
