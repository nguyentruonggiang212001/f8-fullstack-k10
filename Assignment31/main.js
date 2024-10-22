const tbody = document.getElementById("tbody");
const addTodoForm = document.getElementById("addTodoForm");
const statusTable = document.getElementById("statusTable");
const searchTable = document.getElementById("search");

let todos = [];

fetch("http://localhost:3000/todos")
  .then((response) => response.json())
  .then((data) => {
    todos = data;
    filter();
  });
function generateRandomID(n) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "todo-";
  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }
  return id;
}
// Hàm hiển thị todos lên màn hình
function renderTodos(todos) {
  tbody.innerHTML = "";
  todos.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.description}</td>
      <td>
        <button class="status-btn" style="background-color: ${
          item.status ? "Green" : "Red"
        }">
          ${item.status ? "Completed" : "Doing"}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Hàm để thêm todo mới
function addTodo() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  if (!title || !description) {
    alert("Title và description không được để trống!");
    return;
  }
  let status;
  if (Math.random() < 0.5) {
    status = true;
  } else {
    status = false;
  }
  const newTodo = {
    id: generateRandomID(2),
    title,
    description,
    status,
  };
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  })
    .then((response) => response.json())
    .then((data) => {
      todos.push(data);
      filter();
      addTodoForm.reset();
    });
}
addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

//Trạng thái Table Todos
function filterByStatus(todos) {
  const status = statusTable.value;
  const filterStatus = []; // Mảng chứa todos đã lọc
  for (const todo of todos) {
    if (status === "Completed" && todo.status) {
      filterStatus.push(todo);
    } else if (status === "Doing" && !todo.status) {
      filterStatus.push(todo);
    } else if (status === "All") {
      filterStatus.push(todo);
    }
  }
  return filterStatus;
}
// Lọc todos theo trạng thái và tìm kiếm theo tiêu đề và mô tả
function filter() {
  const filterTodos = [];
  const searchTerm = searchTable.value.toLowerCase();
  const filterStatus = filterByStatus(todos);
  filterStatus.forEach((todo) => {
    if (
      todo.title.toLowerCase().includes(searchTerm) ||
      todo.description.toLowerCase().includes(searchTerm)
    ) {
      filterTodos.push(todo);
    }
  });

  if (filterTodos.length === 0) {
    tbody.innerHTML =
      "<tr><td colspan='4' style='text-align: center;'>Không tìm thấy kết quả nào phù hợp.</td></tr>";
  } else {
    renderTodos(filterTodos);
  }
}
statusTable.addEventListener("change", filter);
searchTable.addEventListener("input", filter);
renderTodos(todos);
