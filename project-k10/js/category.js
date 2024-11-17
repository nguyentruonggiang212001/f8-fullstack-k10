import { getAll } from "./services.js";
import { getParams, render } from "./utils.js";

const categoryEle = document.getElementById("category");
console.log(categoryEle);
const title = document.getElementById("title");

const param = getParams("category");
title.innerText = `Top ${param}:`.toUpperCase();

const { products } = await getAll(`products/category/${param}`);
console.log(products);

render(categoryEle, products);

const searchInput = document.getElementById("search-input");
const searchMessage = document.getElementById("search-message");
const searchButton = document.getElementById("search-button");

// Hàm lọc sản phẩm khi người dùng nhập tìm kiếm
searchInput.addEventListener("change", () => {
  const search = searchInput.value.toLowerCase();
  filter(search);
});
searchButton.addEventListener("click", () => {
  const search = searchInput.value.toLowerCase();
  filter(search);
});

// Hàm thực hiện tìm kiếm và cập nhật giao diện
function filter(search) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  categoryEle.innerHTML = "";

  if (filteredProducts.length === 0) {
    searchMessage.textContent = "Không tìm thấy sản phẩm.";
  } else {
    render(categoryEle, filteredProducts);
  }
}

// tìm sản phẩm theo giá
const priceSelect = document.getElementById("price-range");

function filterProducts(selectedRange) {
  let filteredProducts = [];

  if (selectedRange === "1-10") {
    products.forEach(function (product) {
      if (product.price >= 1 && product.price <= 10) {
        filteredProducts.push(product);
      }
    });
  } else if (selectedRange === "10-20") {
    products.forEach(function (product) {
      if (product.price > 10 && product.price <= 20) {
        filteredProducts.push(product);
      }
    });
  } else if (selectedRange === "40-100") {
    products.forEach(function (product) {
      if (product.price > 40 && product.price <= 100) {
        filteredProducts.push(product);
      }
    });
  } else if (selectedRange === "101-2500") {
    products.forEach(function (product) {
      if (product.price > 101 && product.price <= 2500) {
        filteredProducts.push(product);
      }
    });
  } else {
    filteredProducts = [...products];
  }

  filteredProducts.sort(function (a, b) {
    return a.price - b.price;
  });

  return filteredProducts;
}

priceSelect.addEventListener("change", () => {
  categoryEle.innerHTML = "";

  const filtered = filterProducts(priceSelect.value);

  if (filtered.length === 0) {
    searchMessage.textContent = "Không tìm thấy sản phẩm trong khoảng giá này.";
  } else {
    searchMessage.textContent = "";
    render(categoryEle, filtered);
  }
});
const sortSelect = document.getElementById("sort-select");

function sortProducts() {
  const sortProducts = [...products];

  if (sortSelect.value === "a-z") {
    sortProducts.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortSelect.value === "z-a") {
    sortProducts.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      } else if (a.title > b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortSelect.value === "low-high") {
    sortProducts.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortSelect.value === "high-low") {
    sortProducts.sort((a, b) => {
      return b.price - a.price;
    });
  }

  return sortProducts;
}

sortSelect.addEventListener("change", () => {
  categoryEle.innerHTML = "";
  render(categoryEle, sortProducts());
});
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

//search-sub
const searchInputSub = document.getElementById("search-input-sub");
const searchMessageSub = document.getElementById("search-message");
const searchButtonSub = document.getElementById("search-button-sub");

searchInputSub.addEventListener("change", () => {
  const searchSub = searchInputSub.value.toLowerCase();
  filterSub(searchSub);
});
searchButtonSub.addEventListener("click", () => {
  const searchSub = searchInputSub.value.toLowerCase();
  filterSub(searchSub);
});

// Hàm thực hiện tìm kiếm
function filterSub(search) {
  const filteredProductsSub = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  hotSaleSection.innerHTML = "";

  if (filteredProductsSub.length === 0) {
    searchMessageSub.textContent = "Không tìm thấy sản phẩm.";
  } else {
    render(hotSaleSection, filteredProductsSub);
  }
}
