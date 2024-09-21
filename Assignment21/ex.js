//Bài 1
function createCustomers(customers) {
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - i - 1; j++) {
      if (customers[j].age > customers[j + 1].age) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  for (const customer of customers) {
    const nameUpdate = customer.name.split(" ");
    const shortName = `${nameUpdate[0]} ${nameUpdate[nameUpdate.length - 1]}`;
    customer.shortName = shortName;
  }

  return customers;
}
const customers = [
  { name: "Nguyễn Văn A", age: 30, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 4, address: "Quang Ninh" },
  { name: "Nguyễn Văn D", age: 12, address: "TP.HCM" },
  { name: "Nguyễn Văn E", age: 6, address: "Bac Giang" },
];
const result = createCustomers(customers);

console.log(result);

// bài 2

const users = [];

function register(name, password, email) {
  if (!name || !password || !email) {
    console.log("Thiếu thông tin đăng ký. Vui lòng điền đầy đủ!");
    return;
  }

  const newUpate = { name, password, email, role: "user" };
  users.push(newUpate);

  return users;
}

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      return users[i];
    }
  }

  return "Thông tin đăng nhập không hợp lệ!";
}

console.log(register("Hoang", "12345", "hoangnm@gmail.com"));
console.log(register("An", "00000", "hoangan@gmail.com"));
console.log(login("hoangan@gmail.com", "00000"));
console.log(login("hoangnm@gmail.com", ""));
