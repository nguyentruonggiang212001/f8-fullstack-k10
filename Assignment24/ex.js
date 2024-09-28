//Bài1
const students = [
  { id: 1, name: "Nguyen Manh Huy", age: 18 },
  { id: 2, name: "Nguyen Thanh An", age: 18 },
  { id: 3, name: "Phan Tuan Manh", age: 18 },
  { id: 4, name: "Nguyen Truong Giang", age: 15 },
  { id: 5, name: "Tran Ngoc Duy", age: 18 },
  { id: 6, name: "Hoang Thanh Huy", age: 18 },
  { id: 7, name: "Nguyen The Han", age: 18 },
  { id: 8, name: "Le Huu Trong", age: 17 },
  { id: 9, name: "Vu Quoc Dung", age: 18 },
  { id: 10, name: "Nguyen Hai Duong", age: 18 },
  { id: 11, name: "Nguyen Trung Hieu", age: 18 },
  { id: 12, name: "Tran Duy Dong", age: 18 },
  { id: 13, name: "Tran Minh Hoang", age: 18 },
  { id: 14, name: "Nguyen Minh Hoang", age: 18 },
  { id: 15, name: "Nhung", age: 18 },
  { id: 16, name: "Nguyễn Nhung", age: 18 },
];
const result = students.sort((a, b) => {
  const nameA = a.name.split(" ").slice(-1);
  const nameB = b.name.split(" ").slice(-1);

  if (nameA > nameB) {
    return 1;
  } else if (nameA < nameB) {
    return -1;
  } else {
    const familyNameA = a.name.split(" ").slice(0, -1).join(" ");
    const familyNameB = b.name.split(" ").slice(0, -1).join(" ");
    if (familyNameA > familyNameB) {
      return 1;
    } else if (familyNameA < familyNameB) {
      return -1;
    } else {
      return 0;
    }
  }
});

console.log(result);

//Bài 2
const informationStudent = result.map((student) => {
  const newStudent = {
    id: student.id,
    name: student.name.toUpperCase(),
    age: student.age,
    isUnderage: false,
  };
  if (student.age < 18) {
    newStudent.isUnderage = true;
  }
  return newStudent;
});
console.log(informationStudent);

for (const studentInfo of informationStudent) {
  if (studentInfo.isUnderage) {
    document.write(
      `<div>
      <h2>ID: ${studentInfo.id}</h2>
      <h3> Name: ${studentInfo.name}</h3>
      <p class="color"> Age:${studentInfo.age}</p>
      <span>--------------------------------------------------</span>
      </div>
      `
    );
  } else {
    document.write(
      `<div>
      <h2>ID: ${studentInfo.id}</h2>
      <h3> Name: ${studentInfo.name}</h3>
      <p> Age:${studentInfo.age}</p>
      <span>--------------------------------------------------</span>
      `
    );
  }
}
//bài 3
const order = {
  id: 1,
  products: [
    { id: 1, name: "Tivi", price: 10000, quantity: 1 },
    { id: 2, name: "Tủ lạnh", price: 15000, quantity: 2 },
    { id: 3, name: "Máy giặt", price: 8000, quantity: 4 },
    { id: 4, name: "Điều hòa", price: 12000, quantity: 1 },
  ],
};

const totalAmount = order.products.reduce((total, product) => {
  total += product.price * product.quantity;
  return total;
}, 0);
order.totalAmount = totalAmount;
console.log(order);
