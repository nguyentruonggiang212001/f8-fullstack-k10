import { getById } from "./services.js";
import { getParams } from "./utils.js";

const detailEle = document.getElementById("detail");

const id = getParams("id");
console.log(id);
const product = await getById("products", id);
console.log(product);

function renderDetail(target, data) {
  const productItem = document.createElement("div");
  productItem.classList.add("row");
  productItem.innerHTML = /*html*/ `
  <p class="quantity-text" style="font-weight: 600;">Hãng: ${data.brand} </p>
  <p class="quantity-text" style="font-weight: 600;">Còn: ${data.stock} sản phẩm</p>
    <div class="total">
      <span>CHỌN SỐ LƯỢNG</span>
      <div class="quantity-control">
        <button class="left">-</button>
        <span class="quantity">1</span>
        <button class="right">+</button>
      </div>
    </div>
   

  `;
  target.appendChild(productItem);

  let quantity = 1;
  const quantityElement = productItem.querySelector(".quantity");
  const left = productItem.querySelector(".left");
  const right = productItem.querySelector(".right");

  function updateQuantity() {
    quantityElement.textContent = quantity;
  }

  right.addEventListener("click", () => {
    if (quantity < data.stock) {
      quantity++;
      updateQuantity();
    }
  });

  left.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateQuantity();
    }
  });

  updateQuantity();
}

renderDetail(detailEle, product);
