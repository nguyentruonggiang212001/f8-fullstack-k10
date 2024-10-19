/**
 * - Xây dựng giao diện hiển thị việc cần làm dạng bảng.
 * - Viết các hàm chức năng cho form và các nút bấm: Thêm, cập nhật trạng thái, sửa, xoá việc cần làm.
 * - Khi nhấn vào tên của việc cần làm sẽ cập nhật trạng thái và màu sắc của title, ví dụ: "task 1 - completed" hoặc "task 2 - pending".
 */

const todoList = document.getElementById("todoList");
const titleEle = document.getElementById("title");
const descriptionEle = document.getElementById("description");
const todoForm = document.getElementById("todoForm");
const btnSubmit = document.getElementById("btnSubmit");
const btnReset = document.getElementById("btnReset");

let idEditing = null;
let todoEditing = {};

// Hàm tạo ID ngẫu nhiên
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

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

// Hàm lưu danh sách todos vào localStorage
function handleLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Hàm hiển thị danh sách todos
function renderTodo(datas) {
  todoList.innerHTML = "";
  if (datas.length) {
    console.log(datas);
    datas.forEach((item) => {
      let trEle = document.createElement("tr");
      trEle.innerHTML = `
        <td>${item.id}</td>
        <td>
          <button class="${
            item.status ? "completed" : "pending"
          }" onclick="toggleStatus('${item.id}')">${item.title} - ${
        item.status ? "Completed" : "Pending"
      }</button>
        </td>
        <td>${item.description}</td>
        <td>
          <button onclick="removeTodo('${
            item.id
          }')" class="btn btn-danger">Remove</button>
          <button onclick="updateTodo('${
            item.id
          }')" class="btn btn-warning">Update</button>
        </td>
      `;
      todoList.appendChild(trEle);
    });
  } else {
    todoList.innerHTML = "<tr><td colspan='4'>No data</td></tr>";
  }
}

// Hàm kiểm tra công việc có hợp lệ không
function validTodo(title, description) {
  if (title === "" || description === "") {
    return false;
  }
  return true;
}
//Hàm mô tả công việc
function createTodo(title, description) {
  return {
    id: generateRandomID(12),
    title,
    description,
    status: false,
  };
}
// Hàm thêm hoặc cập nhật công việc
function addTodo(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  if (!title || !description) {
    alert("Title và description không được để trống!");
    return;
  }
  if (idEditing) {
    for (const todo of todos) {
      if (todo.id === idEditing) {
        todo.title = title;
        todo.description = description;
        break;
      }
    }
    resetEditingState();
  } else {
    todos.push(createTodo(title, description));
  }
  handleLocalStorage(todos);
  renderTodo(todos);
  resetForm();
}

// Hàm để reset trạng thái
function resetEditingState() {
  idEditing = null;
  todoEditing = {};
}

// Hàm xóa công việc
function removeTodo(id) {
  const confirmDelete = confirm(
    "Bạn có chắc chắn muốn xóa việc này không nếu xóa sẽ không khôi phục được nữa ?"
  );
  if (confirmDelete) {
    const updatedTodos = [];
    todos.forEach((todo) => {
      if (todo.id !== id) {
        updatedTodos.push(todo);
      }
    });
    todos = updatedTodos;
    handleLocalStorage(todos);
    renderTodo(todos);
  }
}

// Hàm cập nhật thông tin công việc
function updateTodo(id) {
  let found = false;
  todos.forEach((todo) => {
    if (todo.id === id && !found) {
      todoEditing = {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        status: todo.status,
      };
      titleEle.value = todo.title;
      descriptionEle.value = todo.description;
      idEditing = todo.id;
      found = true;
    }
  });
}

// Hàm reset form
const inputFields = [titleEle, descriptionEle];
function resetForm() {
  inputFields.forEach(function (input) {
    input.value = "";
  });
  idEditing = null;
}

// Hàm chuyển đổi trạng thái của công việc
function toggleStatus(id) {
  for (let todo of todos) {
    if (todo.id === id) {
      todo.status = !todo.status;
      break;
    }
  }
  handleLocalStorage(todos);
  renderTodo(todos);
}

renderTodo(todos);

// Gắn sự kiện cho form và nút reset
todoForm.addEventListener("submit", addTodo);
btnReset.addEventListener("click", function () {
  const confirmReset = confirm("Bạn có chắc chắn muốn reset form không?");
  if (confirmReset) {
    resetForm();
  }
});
