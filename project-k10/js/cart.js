const cartList = JSON.parse(localStorage.getItem("cartList")) || [];

function renderCart(arr) {
  const cartEle = document.getElementById("Cart");
  cartEle.innerHTML = "";

  const cartContainer = document.createElement("div");
  cartContainer.classList.add("cart-container");

  // Render product items
  const productContainer = document.createElement("div");
  productContainer.classList.add("product-container");
  if (arr.length < 1) {
    cartEle.innerHTML = `
    <div class = "cart-main">
    <img src="../img/cart-content.svg" alt="box" />
    <p>Bạn chưa có sản phẩm nào trong giỏ hàng.</p>
    <button class ="button"><a href="../index.html"><i class="fa-solid fa-basket-shopping"></i>TIẾP TỤC MUA SẮM </a></button>
    </div>

    `;
    return;
  }
  // Render product items
  arr.forEach((cart) => {
    const productItem = document.createElement("div");
    productItem.innerHTML = `
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-12">
          <div class="cart-content">         
            <div class="cart-box"><h1>Tên hàng</h1>
              <p>${cart.product.title}</p>
              <img class="cart-img" src="${cart.product.thumbnail}" alt="${
      cart.product.title
    }" />
            </div>
            <div>
              <span class="price">Giá</span>
              <p class ="price-sub">${cart.product.price}$</p>
            </div>
            <div>
              <span>Số lượng</span>
              <div class="total">
                <div class="quantity-control">
                  <button class="left">-</button>
                  <span class="quantity">${cart.quantity}</span>
                  <button class="right">+</button>
                </div>
              </div>
            </div>
            <div>
              <span>Tổng tiền</span>
              <p class="product-total">${totalProduct(cart)}$</p>
              <div class="delete-product" style="margin-top: 100px;";>
                <i class="fa-regular fa-trash-can"></i>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    cartEle.appendChild(productItem);

    const quantityElement = productItem.querySelector(".quantity");
    const productTotalElement = productItem.querySelector(".product-total");
    const left = productItem.querySelector(".left");
    const right = productItem.querySelector(".right");
    let quantity = cart.quantity;

    function updateQuantity() {
      quantityElement.textContent = quantity;
      let productTotal = totalProduct(cart);
      productTotalElement.textContent = `${productTotal.toFixed(2)}$`;
      localStorage.setItem("cartList", JSON.stringify(cartList));
      let totalPrice = totalAllProduct(cartList);
      document.getElementById(
        "total-price"
      ).textContent = `${totalPrice.toFixed(2)}$`;
    }

    right.addEventListener("click", () => {
      if (quantity < cart.product.stock) {
        quantity++;
        cart.quantity = quantity;
        updateQuantity();
      }
    });

    left.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        cart.quantity = quantity;
        updateQuantity();
      }
    });

    // Delete product
    productItem
      .querySelector(".delete-product")
      .addEventListener("click", () => {
        if (confirm("Bạn có chắc muốn xoá sản phẩm này khỏi giỏ hàng?")) {
          removeById(cart.product.id, arr);
        }
      });
  });

  //In ra tính tổng tiền
  const cartSummary = document.createElement("div");
  cartSummary.innerHTML = `
    <div class ="row">
        <div class="col-lg-12 col-sm-12 col-12">
        <div class="cart-content-sub">
          <div class ="cart-content-sub-product"><span>ĐƠN HÀNG</span></div>
          <div class ="cart-content-total"><p >Tổng giá trị đơn hàng: <span id="total-price">${totalAllProduct(
            arr
          )}$</span></p></div>
          <button id="check-total">THANH TOÁN HÓA ĐƠN</button>
        </div>
      </div>
    </div>
   `;
  cartEle.appendChild(cartSummary);

  // In ra hóa đơn"
  const checkTotal = document.getElementById("check-total");
  checkTotal.addEventListener("click", function () {
    const total = totalAllProduct(arr);
    alert(`Tổng hóa đơn của bạn là ${total.toFixed(2)}$`);
  });
}

function totalProduct(cart) {
  return cart.product.price * cart.quantity;
}

function totalAllProduct(cartList) {
  let total = 0;
  total = cartList.reduce(function (accumulator, cart) {
    let productTotal = totalProduct(cart);
    return accumulator + productTotal;
  }, 0);

  return total;
}

function removeById(productId, arr) {
  const newCart = arr.filter((cart) => cart.product.id !== productId);
  localStorage.setItem("cartList", JSON.stringify(newCart));
  // Cập nhật lại biến cartList bằng newCart
  cartList.length = 0;
  cartList.push(...newCart);
  renderCart(newCart);
  const totalPrice = totalAllProduct(newCart);
  document.getElementById("total-price").textContent = `${totalPrice}$`;
}

renderCart(cartList);

//chọn nam nữ dropdown
const toggleWomen = document.getElementById("toggleWomen");
const toggleMen = document.getElementById("toggleMen");
const dropdownWomen = document.getElementById("dropdownWomen");
const dropdownMen = document.getElementById("dropdownMen");

function toggleDropdown(checkbox, dropdown) {
  if (checkbox.checked) {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}

toggleWomen.addEventListener("change", function () {
  toggleDropdown(toggleWomen, dropdownWomen);
});

toggleMen.addEventListener("change", function () {
  toggleDropdown(toggleMen, dropdownMen);
});
