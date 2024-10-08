const menu = [
  {
    id: 1,
    name: "Home",
    parentId: 0,
  },
  {
    id: 2,
    name: "About",
    parentId: 0,
  },
  {
    id: 3,
    name: "News",
    parentId: 0,
  },
  {
    id: 4,
    name: "Products",
    parentId: 0,
  },
  {
    id: 5,
    name: "Contact",
    parentId: 0,
  },
  {
    id: 6,
    name: "T-Shirt",
    parentId: 4,
  },
  {
    id: 7,
    name: "Jean",
    parentId: 4,
  },
  {
    id: 8,
    name: "Skirt",
    parentId: 4,
  },
];
//Bài1
// test
function createMenu(menu) {
  let menuMain = '<ul id="main-menu">';

  menu.forEach((item) => {
    if (item.parentId === 0) {
      menuMain += `<li><a href="#" style="font-size: 24px;text-decoration: none;color: black;">${item.name}</a>`;
      let menuBody = "";
      let subMenu = false;
      menu.forEach((subItem) => {
        if (subItem.parentId === item.id) {
          subMenu = true;
          menuBody += `<li><a href="#" style="font-size: 20px; text-decoration: none;color: black;">${subItem.name}</a></li>`;
        }
      });
      if (subMenu) {
        menuMain += `<ul>${menuBody}</ul>`;
      }

      menuMain += "</li>";
    }
  });
  menuMain += "</ul>";
  document.body.innerHTML += menuMain;
}
createMenu(menu);

const cart = [
  {
    id: 1,
    name: "T-Shirt",
    price: 100000,

    quantity: 2,
    hotSale: false,
  },
  {
    id: 2,
    name: "Jean",
    price: 200000,
    quantity: 1,
    hotSale: false,
  },
  {
    id: 3,
    name: "Skirt",
    price: 150000,
    quantity: 3,
    hotSale: true,
  },
  {
    id: 4,
    name: "Shirt",
    price: 120000,
    quantity: 2,
    hotSale: false,
  },
  {
    id: 5,
    name: "Jacket",
    price: 250000,
    quantity: 1,
    hotSale: true,
  },
];
//Bài 2
function renderOrder(cart) {
  let total = 0;
  let rowsTable = [];

  for (const item of cart) {
    const totalPrice = item.price * item.quantity;
    total += totalPrice;
    rowsTable.push(`
        <tr style="color: ${item.hotSale ? "red" : "black"};">
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.quantity}</td>
          <td>${totalPrice}</td>
        </tr>
      `);
  }
  const tableOder = `
      <table>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          ${rowsTable.join("")} 
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">Tổng tiền</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    `;

  return tableOder;
}

document.body.innerHTML += renderOrder(cart);

//Bài 3
function countElements(tagName) {
  if (typeof tagName !== "string") {
    return "tagName phải là một chuỗi ";
  }

  const elements = document.getElementsByTagName(tagName);

  if (elements.length === 0) {
    return `Không có thẻ ${tagName} nào trong tài liệu.`;
  }

  return elements.length;
}

console.log(countElements("li"));
console.log(countElements("ul"));
console.log(countElements(123));
console.log(countElements("abc"));
