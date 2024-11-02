import { getAll, getById, removeById, updateById } from "./services.js";
import { getParams } from "./utils.js";

const { products } = await getAll("products");
console.log(products);

const hotSaleSection = document.getElementById("hot-sale");

function render(target, datas) {
  const listProduct = document.querySelector(".product-list");
  datas.forEach((item) => {
    const div = document.createElement("div");
    div.className = "col-lg-4 col-md-6 col-sm-6 col-12";
    div.innerHTML = /*html*/ `
        <div class="product-card">
          <a href='./product-detail.html?id=${item.id}'><img src="${item.thumbnail}" alt="${item.title}" /></a>
          <div class="product-infor">
            <h2>${item.title}</h2>
            <div>Giá: ${item.price}</div>
            <p>Mô tả: ${item.description}</p>
            <button>Xem chi tiết</button>
          </div>
        </div>
    `;
    // target && target.appendChild(div);
    listProduct.appendChild(div);
  });
}

render(hotSaleSection, products);
// render(hotSaleSection, products);

const productId = getParams("id");
console.log(productId);

const product = await getById("products", productId);

// Cách 2: Lấy toàn bộ sản phẩm về -> products. Khi cần sản phẩm chi tiết thì sử dụng products.find()
console.log(product);
