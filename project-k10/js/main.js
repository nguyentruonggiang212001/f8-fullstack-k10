import { getAll, getById, removeById, updateById } from "./services.js";
import { getParams, render } from "./utils.js";

const { products } = await getAll("products");
console.log(products);

const hotSaleSection = document.getElementById("hot-sale");

render(hotSaleSection, products);

const productId = getParams("id");
console.log(productId);

const product = await getById("products", productId);

// Cách 2: Lấy toàn bộ sản phẩm về -> products. Khi cần sản phẩm chi tiết thì sử dụng products.find()
console.log(product);
//

// Tìm kiếm sản phẩm theo tên
const searchInput = document.getElementById("search-input");
const searchMessage = document.getElementById("search-message");
const searchButton = document.getElementById("search-button");

searchInput.addEventListener("change", () => {
  const search = searchInput.value.toLowerCase();
  filter(search);
});
searchButton.addEventListener("click", () => {
  const search = searchInput.value.toLowerCase();
  filter(search);
});

// Hàm thực hiện tìm kiếm
function filter(search) {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

  hotSaleSection.innerHTML = "";

  if (filteredProducts.length === 0) {
    searchMessage.textContent = "Không tìm thấy sản phẩm.";
  } else {
    render(hotSaleSection, filteredProducts);
  }
}

//checkbox và dropdown của nam và nữ
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

const categorySelect = document.getElementById("category-select");
const priceSelect = document.getElementById("price-range");
const sortSelect = document.getElementById("sort-select");

// Hàm lọc sản phẩm theo danh mục
function filterByCategory(category) {
  if (category) {
    return products.filter((product) => product.category === category);
  } else {
    return products;
  }
}
// Hàm lọc sản phẩm theo khoảng giá
function filterByPriceRange(selectedRange) {
  return products.filter((product) => {
    if (selectedRange === "1-10") {
      return product.price >= 1 && product.price <= 10;
    } else if (selectedRange === "10-20") {
      return product.price > 10 && product.price <= 20;
    } else if (selectedRange === "40-100") {
      return product.price > 40 && product.price <= 100;
    } else if (selectedRange === "101-2500") {
      return product.price > 101 && product.price <= 2500;
    } else {
      return true;
    }
  });
}

// Hàm sắp xếp sản phẩm
function sortProducts(productsList) {
  if (sortSelect.value === "a-z") {
    productsList.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortSelect.value === "z-a") {
    productsList.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      } else if (a.title > b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortSelect.value === "low-high") {
    productsList.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortSelect.value === "high-low") {
    productsList.sort((a, b) => {
      return b.price - a.price;
    });
  }

  return productsList;
}

// Hàm tổng hợp lọc và sắp xếp
function allProductsSort() {
  let filteredProducts = filterByCategory(categorySelect.value);

  filteredProducts = filterByPriceRange(priceSelect.value).filter(function (
    product
  ) {
    return filteredProducts.includes(product);
  });

  filteredProducts = sortProducts(filteredProducts);

  hotSaleSection.innerHTML = "";

  if (filteredProducts.length === 0) {
    searchMessage.textContent = "Không tìm thấy sản phẩm trong khoảng giá đó.";
  } else {
    searchMessage.textContent = "";
    render(hotSaleSection, filteredProducts);
  }
}

categorySelect.addEventListener("change", allProductsSort);
priceSelect.addEventListener("change", allProductsSort);
sortSelect.addEventListener("change", allProductsSort);
