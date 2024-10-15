const registerInfo = [];
const errorMessageDiv = document.getElementById("error-message");

function getFormInfo() {
  const fullname = document.querySelector('input[name="fullname"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const confirmPassword = document.querySelector(
    'input[name="confirmPassword"]'
  ).value;
  const gender = document.querySelector('select[name="gender"]').value;
}

document.getElementById("register").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullname = document.querySelector('input[name="fullname"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;
  const confirmPassword = document.querySelector(
    'input[name="confirmPassword"]'
  ).value;
  const gender = document.querySelector('select[name="gender"]').value;
  let errorMessages = [];
  errorMessageDiv.innerHTML = "";

  if (!fullname) {
    errorMessages.push("Chưa nhập họ và tên");
  }
  if (!email) {
    errorMessages.push("Chưa nhập email");
  }
  if (!password) {
    errorMessages.push("Chưa nhập mật khẩu");
  }
  if (!confirmPassword) {
    errorMessages.push("Chưa xác nhận mật khẩu");
  }
  if (gender === "other") {
    errorMessages.push("Bạn bị LGBT à ??????");
  }
  if (confirmPassword !== password) {
    errorMessages.push("Mật khẩu không khớp");
  }
  if (errorMessages.length > 0) {
    errorMessageDiv.innerHTML = errorMessages.join(" ");
    return;
  }
  registerInfo.push({
    fullname: fullname,
    email: email,
    password: password,
    gender: gender,
  });
  console.log(registerInfo);
});
