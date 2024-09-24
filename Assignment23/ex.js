//Bài1
const products = [
  { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
  { id: "1OT22W009", name: "Boys T-shirt" },
  { id: "1OT22W032", name: "Boys Shirt" },
  { id: "1OT22W011", name: "Men's Super Warm Jacket" },
  { id: "1OT22W000", name: "Women's Party Dress" },
];

const searchProduct = prompt("Mời bạn nhập tên sản phẩm :")
  .trim()
  .toLowerCase();

const productName = products.filter(function (product) {
  return product.name.toLowerCase().includes(searchProduct);
});

if (productName.length) {
  let resultMessage = "Sản phẩm cần tìm kiếm là:\n";
  for (let product of productName) {
    resultMessage += ` { id: "${product.id}", name: "${product.name}"}\n`;
  }
  alert(resultMessage);
} else {
  alert("Không tìm thấy sản phẩn cần tìm kiếm.");
}

//bài 2
const datas = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 0 },
  { name: "Carol", age: -1 },
  { name: "David", age: null },
  { name: "Eve", age: NaN },
  { name: "Frank", age: undefined },
  { name: "", age: 20 },
];

function dataCleanup(arr) {
  const validData = [];
  const invalidData = [];

  for (const user of arr) {
    const nameValid = typeof user.name === "string" && user.name !== "";
    const ageValid =
      typeof user.age === "number" && user.age > 0 && !isNaN(user.age);

    if (nameValid && ageValid) {
      validData.push(user);
    } else {
      invalidData.push(user);
    }
  }

  return { validData, invalidData };
}

console.log(dataCleanup(datas));

//Bài3
const orders = [
  { id: "1", name: "A", quantity: 2, price: 100 },
  { id: "2", name: "B", quantity: 1, price: 200 },
  { id: "3", name: "C", quantity: 3, price: 300 },
];

function calculateOrderTotal(orders) {
  let sum = 0;
  for (const order of orders) {
    sum += order.quantity * order.price;
  }
  return sum;
}
console.log(`Tổng giá trị của đơn hàng là: ${calculateOrderTotal(orders)}`);
