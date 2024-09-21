//bài1
const numbers = [1, 2, 3, 4, 5, 6];
function Array(arr) {
  const reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}

console.log(Array(numbers));

//Bài2

const employees = [
  { id: 1, name: "Hoang", homeTown: "Hanoi" },
  { id: 2, name: "An", homeTown: "Thaibinh" },
  { id: 3, name: "Huy", homeTown: "Langson" },
  { id: 4, name: "Dinh", homeTown: "Saigon" },
  { id: 5, name: "Dong", homeTown: "Saigon" },
  { id: 6, name: "Nhinh", homeTown: "Langson" },
];
function homeTown(employees) {
  const groupEmployees = {};

  for (const employee of employees) {
    const homeTown = employee.homeTown;

    if (groupEmployees[homeTown] == null) {
      groupEmployees[homeTown] = [];
    }
    groupEmployees[homeTown].push(employee);
  }

  return groupEmployees;
}

console.log(homeTown(employees));
//Bài3
const products = [
  { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
  { id: "1OT22W009", name: "Boys T-shirt" },
  { id: "1OT22W032", name: "Boys Shirt" },
  { id: "1OT22W011", name: "Men's Super Warm Jacket" },
  { id: "1OT22W000", name: "Women's Party Dress" },
];
function slugify(products) {
  let arr = [];

  for (const product of products) {
    const lowerName = product.name.toLowerCase();
    const lowerId = product.id.toLowerCase();
    const slugName = lowerName.split(" ").join("-");
    const slug = `${slugName}-${lowerId}`;
    arr = arr.concat({
      id: product.id,
      name: product.name,
      slug: slug,
    });
  }

  return arr;
}

console.log(slugify(products));
